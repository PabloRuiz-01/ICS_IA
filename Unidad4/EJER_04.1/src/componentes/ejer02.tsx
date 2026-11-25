import { useReducer } from "react";

interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

interface LineaCarrito {
    producto: Producto;
    cantidad: number;
}

type Accion =
    | { tipo: "anadir"; producto: Producto }
    | { tipo: "quitar"; idProducto: number }
    | {
        tipo: "cambiarCantidad";
        idProducto: number;
        cantidad: number;
    }
    | { tipo: "vaciar" }
    | { tipo: "deshacer" };

interface Estado {
    lineas: LineaCarrito[];
    historial: LineaCarrito[][];
}

const catalogo: Producto[] = [
    { id: 1, nombre: "Teclado", precio: 35.99 },
    { id: 2, nombre: "Ratón", precio: 19.99 },
    { id: 3, nombre: "Monitor", precio: 179.99 },
    { id: 4, nombre: "Auriculares", precio: 49.99 },
];

const estadoInicial: Estado = {
    lineas: [],
    historial: [],
};

function reductor(
    estado: Estado,
    accion: Accion
): Estado {
    switch (accion.tipo) {
        case "anadir": {
            const existe = estado.lineas.some(
                (linea) => linea.producto.id === accion.producto.id
            );

            const nuevasLineas = existe
                ? estado.lineas.map((linea) =>
                    linea.producto.id === accion.producto.id
                        ? { ...linea, cantidad: linea.cantidad + 1 }
                        : linea
                )
                : [
                    ...estado.lineas,
                    { producto: accion.producto, cantidad: 1 },
                ];

            return {
                lineas: nuevasLineas,
                historial: [...estado.historial, estado.lineas],
            };
        }

        case "quitar": {
            return {
                lineas: estado.lineas.filter(
                    (linea) => linea.producto.id !== accion.idProducto
                ),
                historial: [...estado.historial, estado.lineas],
            };
        }

        case "cambiarCantidad": {
            const nuevasLineas =
                accion.cantidad <= 0
                    ? estado.lineas.filter(
                        (linea) => linea.producto.id !== accion.idProducto
                    )
                    : estado.lineas.map((linea) =>
                        linea.producto.id === accion.idProducto
                            ? { ...linea, cantidad: accion.cantidad }
                            : linea
                    );

            return {
                lineas: nuevasLineas,
                historial: [...estado.historial, estado.lineas],
            };
        }

        case "vaciar": {
            return {
                lineas: [],
                historial: [...estado.historial, estado.lineas],
            };
        }

        case "deshacer": {
            if (estado.historial.length === 0) {
                return estado;
            }

            return {
                lineas: estado.historial[estado.historial.length - 1],
                historial: estado.historial.slice(0, -1),
            };
        }
    }
}

function Carrito() {
    const [estado, dispatch] = useReducer(
        reductor,
        estadoInicial
    );

    const { lineas } = estado;

    const numeroArticulos = lineas.reduce(
        (acumulado, linea) => acumulado + linea.cantidad,
        0
    );

    const total = lineas.reduce(
        (acumulado, linea) =>
            acumulado + linea.producto.precio * linea.cantidad,
        0
    );

    const formatoEuros = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
    });

    return (
        <section>
            <h2>Catálogo</h2>

            {catalogo.map((producto) => (
                <article key={producto.id}>
                    <span>
                        {producto.nombre} -{" "}
                        {formatoEuros.format(producto.precio)}
                    </span>

                    <button
                        onClick={() =>
                            dispatch({ tipo: "anadir", producto })
                        }
                    >
                        Añadir
                    </button>
                </article>
            ))}

            <hr />

            <h2>Mi carrito</h2>

            {lineas.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                lineas.map((linea) => (
                    <article key={linea.producto.id}>
                        <p>
                            {linea.producto.nombre}:
                            {" "}{linea.cantidad} unidades
                            {" "}({formatoEuros.format(
                                linea.producto.precio * linea.cantidad
                            )})
                        </p>

                        <button
                            onClick={() =>
                                dispatch({
                                    tipo: "cambiarCantidad",
                                    idProducto: linea.producto.id,
                                    cantidad: linea.cantidad - 1,
                                })
                            }
                        >
                            -
                        </button>

                        <button
                            onClick={() =>
                                dispatch({
                                    tipo: "cambiarCantidad",
                                    idProducto: linea.producto.id,
                                    cantidad: linea.cantidad + 1,
                                })
                            }
                        >
                            +
                        </button>

                        <button
                            onClick={() =>
                                dispatch({
                                    tipo: "quitar",
                                    idProducto: linea.producto.id,
                                })
                            }
                        >
                            Quitar
                        </button>
                    </article>
                ))
            )}

            <hr />

            <h3>Resumen</h3>
            <p>Número de artículos: {numeroArticulos}</p>
            <p>Total: {formatoEuros.format(total)}</p>

            <button onClick={() => dispatch({ tipo: "vaciar" })}>
                Vaciar carrito
            </button>

            <button
                onClick={() => dispatch({ tipo: "deshacer" })}
                disabled={estado.historial.length === 0}
            >
                Deshacer
            </button>
        </section>
    );
}

export default Carrito;
