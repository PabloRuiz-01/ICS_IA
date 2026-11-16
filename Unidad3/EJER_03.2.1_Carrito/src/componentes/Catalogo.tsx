import type { Producto, ItemCarrito } from "../datos/productos";
import TarjetaProducto from "./TarjetaProducto";

interface Props {
    productos: Producto[];
    carrito: ItemCarrito[];
    añadir: (producto: Producto) => void;
}

export default function Catalogo({
    productos,
    carrito,
    añadir,
}: Props) {
    return (
        <section>
            <h2>Catálogo de productos</h2>

            <div>
                {productos.map((producto) => (
                    <TarjetaProducto
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        añadir={añadir}
                    />
                ))}
            </div>
        </section>
    );
}