import type { FiltroPrioridad } from "../tipos";
import "../App.css";

interface PropsFiltros {
    filtroSeleccionado: FiltroPrioridad;
    onCambiarFiltro: (filtro: FiltroPrioridad) => void;
}

const opciones: FiltroPrioridad[] = [
    "todas",
    "alta",
    "media",
    "baja",
];

export default function Filtros({
    filtroSeleccionado,
    onCambiarFiltro,
}: PropsFiltros) {
    return (
        <section className="filtros">
            <h2>Filtrar por prioridad</h2>

            <div className="filtros__botones">
                {opciones.map((opcion) => (
                    <button
                        key={opcion}
                        type="button"
                        className={
                            filtroSeleccionado === opcion
                                ? "filtro--activo"
                                : ""
                        }
                        aria-pressed={filtroSeleccionado === opcion}
                        onClick={() => onCambiarFiltro(opcion)}
                    >
                        {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
                    </button>
                ))}
            </div>
        </section>
    );
}
