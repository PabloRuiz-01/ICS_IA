import type { Alumno } from "./tipos";

interface PropsLista {
    alumnos: Alumno[];
    alCambiarNota: (id: string, nota: number) => void;
    alEliminar: (id: string) => void;
}

function ListaAlumnos({
    alumnos,
    alCambiarNota,
    alEliminar
}: PropsLista) {
    return (
        <section>
            <h2>Lista de alumnos</h2>

            {alumnos.length === 0 ? (
                <p>No hay alumnos registrados.</p>
            ) : (
                <ul>
                    {alumnos.map((alumno) => (
                        <li key={alumno.id}>
                            <strong>{alumno.nombre}</strong>

                            {" - Nota: "}

                            <input
                                type="number"
                                min="0"
                                max="10"
                                step="0.1"
                                value={alumno.nota}
                                onChange={(e) =>
                                    alCambiarNota(
                                        alumno.id,
                                        Number(e.target.value)
                                    )
                                }
                            />

                            <button
                                type="button"
                                onClick={() => alEliminar(alumno.id)}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default ListaAlumnos;
