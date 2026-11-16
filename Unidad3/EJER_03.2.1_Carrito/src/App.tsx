import { useState } from "react";

import type { Producto, ItemCarrito } from "./datos/productos";

import { catalogo } from "./datos/productos";

import Catalogo from "./componentes/Catalogo";
import Carrito from "./componentes/Carrito";

export default function App() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  // AÑADIR
  function añadir(producto: Producto) {
    setCarrito((carritoActual) => {
      const existente = carritoActual.find(
        (item) => item.idProducto === producto.id
      );

      if (existente) {
        if (existente.cantidad >= producto.stock) {
          return carritoActual;
        }

        return carritoActual.map((item) =>
          item.idProducto === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      if (producto.stock === 0) {
        return carritoActual;
      }

      return [
        ...carritoActual,
        {
          idProducto: producto.id,
          cantidad: 1,
        },
      ];
    });
  }

  // INCREMENTAR
  function incrementar(id: string) {
    const producto = catalogo.find((p) => p.id === id);

    if (!producto) return;

    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.idProducto === id &&
          item.cantidad < producto.stock
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  }

  // DECREMENTAR
  function decrementar(id: string) {
    setCarrito((carritoActual) =>
      carritoActual
        .map((item) =>
          item.idProducto === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  }

  // ELIMINAR
  function eliminar(id: string) {
    setCarrito((carritoActual) =>
      carritoActual.filter(
        (item) => item.idProducto !== id
      )
    );
  }

  // VACIAR
  function vaciar() {
    setCarrito([]);
  }

  return (
    <main>
      <h1>Mi tienda online</h1>

      <Catalogo
        productos={catalogo}
        carrito={carrito}
        añadir={añadir}
      />

      <hr />

      <Carrito
        catalogo={catalogo}
        carrito={carrito}
        incrementar={incrementar}
        decrementar={decrementar}
        eliminar={eliminar}
        vaciar={vaciar}
      />
    </main>
  );
}