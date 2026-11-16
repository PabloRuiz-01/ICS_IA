import { useState } from "react";
import type { Producto, ItemCarrito } from "../datos/productos";

interface Props {
    producto: Producto;
    item: ItemCarrito;
    incrementar: (id: string) => void;
    decrementar: (id: string) => void;
    eliminar: (id: string) => void;
}

const formatoEuro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

export default function FilaCarrito({
    producto,
    item,
    incrementar,
    decrementar,
    eliminar,
}: Props) {
    const [nota, setNota] = useState("");

    const subtotal = producto.precio * item.cantidad;

    return (
        <div>
            <h3>{producto.nombre}</h3>

            <p>Precio: {formatoEuro.format(producto.precio)}</p>

            <p>Subtotal: {formatoEuro.format(subtotal)}</p>

            <button onClick={() => decrementar(producto.id)}>
                −
            </button>

            <span>{item.cantidad}</span>

            <button
                disabled={item.cantidad >= producto.stock}
                onClick={() => incrementar(producto.id)}
            >
                +
            </button>

            <button onClick={() => eliminar(producto.id)}>
                Eliminar
            </button>

            <div>
                <label>Nota para regalo</label>

                <input
                    type="text"
                    placeholder="Escribe una nota..."
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                />
            </div>
        </div>
    );
}