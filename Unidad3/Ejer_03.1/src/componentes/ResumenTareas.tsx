import type { Tarea } from "../tipos";

interface PropsResumenTareas {
    tareasVisibles: Tarea[];
    totalTareas: number;
}

export default function ResumenTareas({
    tareasVisibles,
    totalTareas,
}: PropsResumenTareas) {
    let mensaje: string;

    if (tareasVisibles.length === 0) {
        mensaje = "No hay tareas para este filtro.";
    } else if (
        tareasVisibles.every((tarea) => tarea.completada)
    ) {
        mensaje =
            "¡Felicidades! Has completado todas las tareas de esta sección.";
    } else {
        mensaje = `Mostrando ${tareasVisibles.length} de ${totalTareas} tareas.`;
    }

    return (
        <section className="resumen">
            <h2>Resumen de tareas</h2>
            <p aria-live="polite">{mensaje}</p>
        </section>
    );
}
