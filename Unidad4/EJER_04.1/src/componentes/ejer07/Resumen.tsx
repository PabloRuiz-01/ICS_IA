
import type { Alumno } from "./tipos";

interface PropsResumen {
    alumnos: Alumno[];
}

function Resumen({ alumnos }: PropsResumen) {
    // Total de alumnos
    const total = alumnos.length;

    // Nota media
    const sumaNotas = alumnos.reduce(
        (acumulado, alumno) => acumulado + alumno.nota,
        0
    );

    const media = total > 0
        ? sumaNotas / total
        : 0;

    // Número de aprobados
    const aprobados = alumnos.filter(
        (alumno) => alumno.nota >= 5
    ).length;

    // Mejor alumno
    const mejorAlumno = alumnos.reduce<Alumno | null>(
        (mejor, alumno) => {
            if (mejor === null || alumno.nota > mejor.nota) {
                return alumno;
            }

            return mejor;
        },
        null
    );

    // Formato de la media con un decimal
    const formatoNota = new Intl.NumberFormat("es-ES", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });

    return (
        <section>
            <h2>Resumen del grupo</h2>

            <p>Total de alumnos: {total}</p>

            <p>
                Nota media: {formatoNota.format(media)}
            </p>

            <p>
                Número de aprobados: {aprobados}
            </p>

            <p>
                Mejor alumno:{" "}
                {mejorAlumno
                    ? `${mejorAlumno.nombre} (${formatoNota.format(mejorAlumno.nota)})`
                    : "Todavía no hay alumnos"}
            </p>
        </section>
    );
}

export default Resumen;
