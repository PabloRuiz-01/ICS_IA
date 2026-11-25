import { useState } from "react";
import type { FormEvent } from "react";

interface PropsResumen {
    nombre: string;
    apellidos: string;
}

interface PropsFicha {
    idAlumno: number;
}

function guardarEnServidor(datos: { nombre: string }) {
    console.log("Guardando en servidor:", datos);
}

function Resumen({ nombre, apellidos }: PropsResumen) {

    const nombreCompleto = `${nombre} ${apellidos}`;

    return (
        <section>
            <h2>Resumen</h2>
            <p>{nombreCompleto}</p>
        </section>
    );
}

function Formulario() {
    const [nombre, setNombre] = useState("");

    function manejarEnvio(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        guardarEnServidor({ nombre });
    }

    return (
        <section>
            <h2>Formulario</h2>

            <form onSubmit={manejarEnvio}>
                <input
                    type="text"
                    placeholder="Introduce tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

function FichaAlumno({ idAlumno }: PropsFicha) {
    const [comentario, setComentario] = useState("");

    return (
        <section>
            <h2>Ficha del alumno {idAlumno}</h2>

            <textarea
                placeholder="Escribe un comentario..."
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
            />
        </section>
    );
}
