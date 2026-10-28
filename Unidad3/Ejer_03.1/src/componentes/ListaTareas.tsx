import type { Tarea } from "../tipos";
import TareaItem from "./Tarea";

interface PropsListaTareas {
    tareas: Tarea[];
    onCambiarCompletada: (id: number) => void;
}

export default function ListaTareas({
    tareas,
    onCambiarCompletada,
}: PropsListaTareas) {
    if (tareas.length === 0) {
        return <p>No hay tareas para este filtro.</p>;
    }

    return (
        <section>
            <h2>Tareas</h2>

            <ul>
                {tareas.map((tarea) => (
                    <TareaItem
                        key={tarea.id}
                        tarea={tarea}
                        onCambiarCompletada={onCambiarCompletada}
                    />
                ))}
            </ul>
        </section>
    );
}
