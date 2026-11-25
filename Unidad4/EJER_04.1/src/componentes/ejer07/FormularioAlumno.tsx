import { useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";

interface PropsFormulario {
    alAnadir: (nombre: string, nota: number) => void;
}

function FormularioAlumno({ alAnadir }: PropsFormulario) {
    const [nombre, setNombre] = useState("");
    const [nota, setNota] = useState("0");

    const campoNombre = useRef<HTMLInputElement>(null);

    function vaciarFormulario() {
        setNombre("");
        setNota("0");
        campoNombre.current?.focus();
    }

    function manejarEnvio(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!nombre.trim()) return;

        const notaNumerica = Number(nota);

        if (!Number.isFinite(notaNumerica)) return;

        alAnadir(nombre.trim(), notaNumerica);

        vaciarFormulario();
    }

    function manejarTecla(e: KeyboardEvent<HTMLFormElement>) {
        if (e.key === "Escape") {
            vaciarFormulario();
        }
    }

    return (
        <section>
            <h2>Añadir alumno</h2>

            <form
                onSubmit={manejarEnvio}
                onKeyDown={manejarTecla}
            >
                <div>
                    <label htmlFor="nombre">Nombre:</label>

                    <input
                        ref={campoNombre}
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre del alumno"
                    />
                </div>

                <div>
                    <label htmlFor="nota">Nota:</label>

                    <input
                        id="nota"
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Añadir alumno
                </button>

                <button
                    type="button"
                    onClick={vaciarFormulario}
                >
                    Vaciar
                </button>
            </form>
        </section>
    );
}

export default FormularioAlumno;
