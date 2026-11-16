import type { Producto, ItemCarrito } from "../datos/productos";

interface Props {
    producto: Producto;
    carrito: ItemCarrito[];
    añadir: (producto: Producto) => void;
}

const formatoEuro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

export default function TarjetaProducto({
    producto,
    carrito,
    añadir,
}: Props) {
    const item = carrito.find(
        (item) => item.idProducto === producto.id
    );

    const cantidad = item?.cantidad ?? 0;

    const agotado = producto.stock === 0;
    const sinStock = cantidad >= producto.stock;

    return (
        <article>
            <h3>{producto.nombre}</h3>

            <p>{formatoEuro.format(producto.precio)}</p>

            <p>Stock disponible: {producto.stock - cantidad}</p>

            <button
                disabled={agotado || sinStock}
                onClick={() => añadir(producto)}
            >
                {agotado
                    ? "Agotado"
                    : sinStock
                        ? "Sin más unidades"
                        : "Añadir"}
            </button>
        </article>
    );
}