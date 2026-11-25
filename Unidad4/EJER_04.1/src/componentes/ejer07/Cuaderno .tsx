import { useEffect, useReducer, useState } from "react";

import type { Alumno, Accion } from "./tipos";

import FormularioAlumno from "./FormularioAlumno";
import ListaAlumnos from "./ListaAlumnos ";
import Resumen from "./Resumen";

const alumnosIniciales: Alumno[] = [];

function normalizarNota(nota: number): number {
    if (!Number.isFinite(nota)) {
        return 0;
    }

    return Math.min(10, Math.max(0, nota));
}

function reductor(
    estado: Alumno[],
    accion: Accion
): Alumno[] {
    switch (accion.tipo) {

        case "anadir": {
            if (!accion.nombre.trim()) {
                return estado;
            }

            return [
                ...estado,
                {
                    id: accion.id,
                    nombre: accion.nombre.trim(),
                    nota: normalizarNota(accion.nota)
                }
            ];
        }

        case "cambiarNota": {
            return estado.map((alumno) =>
                alumno.id === accion.id
                    ? {
                        ...alumno,
                        nota: normalizarNota(accion.nota)
                    }
                    : alumno
            );
        }

        case "eliminar": {
            return estado.filter(
                (alumno) => alumno.id !== accion.id
            );
        }

        case "cargar": {
            return accion.alumnos.map((alumno) => ({
                ...alumno,
                nota: normalizarNota(alumno.nota)
            }));
        }

        case "vaciar": {
            return [];
        }
    }
}

function esAlumno(valor: unknown): valor is Alumno {
    if (
        typeof valor !== "object" ||
        valor === null
    ) {
        return false;
    }

    const alumno = valor as Record<string, unknown>;

    return (
        typeof alumno.id === "string" &&
        typeof alumno.nombre === "string" &&
        typeof alumno.nota === "number" &&
        Number.isFinite(alumno.nota) &&
        alumno.nombre.trim().length > 0
    );
}

function esListaAlumnos(
    valor: unknown
): valor is Alumno[] {
    return (
        Array.isArray(valor) &&
        valor.every(esAlumno)
    );
}

function Cuaderno() {
    const [alumnos, dispatch] = useReducer(
        reductor,
        alumnosIniciales
    );

    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");

    const [orden, setOrden] = useState<"nombre" | "nota">(
        "nombre"
    );

    useEffect(() => {
        const tituloAnterior = document.title;

        document.title = `Cuaderno (${alumnos.length} alumnos)`;

        return () => {
            document.title = tituloAnterior;
        };
    }, [alumnos.length]);

    function manejarAnadir(nombre: string, nota: number) {
        dispatch({
            tipo: "anadir",
            id: crypto.randomUUID(),
            nombre,
            nota
        });
    }

    function manejarCambiarNota(id: string, nota: number) {
        dispatch({
            tipo: "cambiarNota",
            id,
            nota
        });
    }

    function manejarEliminar(id: string) {
        dispatch({
            tipo: "eliminar",
            id
        });
    }

    async function manejarCargarEjemplo() {
        setCargando(true);
        setError("");

        try {
            const respuesta = await fetch("/alumnos.json");

            if (!respuesta.ok) {
                throw new Error(
                    `Error HTTP: ${respuesta.status}`
                );
            }

            const datos: unknown = await respuesta.json();

            if (!esListaAlumnos(datos)) {
                throw new Error("El archivo JSON no tiene un formato válido.");
            }

            dispatch({
                tipo: "cargar",
                alumnos: datos
            });

        } catch (errorDesconocido) {
            setError(
                errorDesconocido instanceof Error
                    ? errorDesconocido.message
                    : "Error desconocido al cargar los alumnos."
            );
        } finally {
            setCargando(false);
        }
    }

    const alumnosOrdenados = [...alumnos].sort(
        (a, b) => {
            if (orden === "nombre") {
                return a.nombre.localeCompare(b.nombre, "es");
            }

            return b.nota - a.nota;
        }
    );

    return (
        <main>
            <h1>Cuaderno de notas del grupo</h1>

            <FormularioAlumno
                alAnadir={manejarAnadir}
            />

            <hr />

            <section>
                <h2>Gestión del grupo</h2>

                <button
                    type="button"
                    onClick={manejarCargarEjemplo}
                    disabled={cargando}
                >
                    {cargando ? "Cargando..." : "Cargar ejemplo"}
                </button>

                <button
                    type="button"
                    onClick={() => dispatch({ tipo: "vaciar" })}
                >
                    Vaciar grupo
                </button>

                {error && (
                    <p role="alert" style={{ color: "red" }}>
                        {error}
                    </p>
                )}
            </section>

            <hr />

            <section>
                <h2>Ordenar alumnos</h2>

                <button
                    type="button"
                    onClick={() => setOrden("nombre")}
                >
                    Ordenar por nombre
                </button>

                <button
                    type="button"
                    onClick={() => setOrden("nota")}
                >
                    Ordenar por nota
                </button>
            </section>

            <ListaAlumnos
                alumnos={alumnosOrdenados}
                alCambiarNota={manejarCambiarNota}
                alEliminar={manejarEliminar}
            />

            <hr />

            <Resumen alumnos={alumnos} />
        </main>
    );
}

export default Cuaderno;
