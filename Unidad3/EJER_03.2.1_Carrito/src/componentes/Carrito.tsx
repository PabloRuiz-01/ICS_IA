import type { Producto, ItemCarrito } from "../datos/productos";
import FilaCarrito from "./FilaCarrito ";
import ResumenCarrito from "./ResumenCarrito";

interface Props {
    catalogo: Producto[];
    carrito: ItemCarrito[];
    incrementar: (id: string) => void;
    decrementar: (id: string) => void;
    eliminar: (id: string) => void;
    vaciar: () => void;
}

export default function Carrito({
    catalogo,
    carrito,
    incrementar,
    decrementar,
    eliminar,
    vaciar,
}: Props) {
    if (carrito.length === 0) {
        return (
            <section>
                <h2>Carrito</h2>
                <p>Tu carrito está vacío</p>
            </section>
        );
    }

    const productosCarrito = carrito.map((item) => ({
        item,
        producto: catalogo.find(
            (producto) => producto.id === item.idProducto
        )!,
    }));

    const resumen = {
        cantidad: carrito.reduce(
            (total, item) => total + item.cantidad,
            0
        ),

        subtotal: productosCarrito.reduce(
            (total, fila) =>
                total + fila.producto.precio * fila.item.cantidad,
            0
        ),
    };

    return (
        <section>
            <h2>Carrito</h2>

            {productosCarrito.map(({ item, producto }) => (
                <FilaCarrito
                    key={item.idProducto}
                    producto={producto}
                    item={item}
                    incrementar={incrementar}
                    decrementar={decrementar}
                    eliminar={eliminar}
                />
            ))}

            <button onClick={vaciar}>
                Vaciar carrito
            </button>

            <ResumenCarrito carrito={resumen} />
        </section>
    );
}