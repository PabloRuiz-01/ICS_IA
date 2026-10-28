
import type { Tarea } from "../tipos";
import "../App.css";

interface PropsTarea {
    tarea: Tarea;
    onCambiarCompletada: (id: number) => void;
}

export default function TareaItem({
    tarea,
    onCambiarCompletada,
}: PropsTarea) {
    return (
        <li
            className={`tarea tarea--${tarea.prioridad} ${tarea.completada ? "tarea--completada" : ""
                }`}
        >
            <label className="tarea__contenido">
                <input
                    type="checkbox"
                    checked={tarea.completada}
                    onChange={() => onCambiarCompletada(tarea.id)}
                    aria-label={`Marcar "${tarea.texto}" como ${tarea.completada ? "pendiente" : "completada"
                        }`}
                />

                <span className="tarea__titulo">
                    {tarea.texto}
                </span>
            </label>

            <span className={`prioridad prioridad--${tarea.prioridad}`}>
                Prioridad: {tarea.prioridad}
            </span>
        </li>
    );
}
