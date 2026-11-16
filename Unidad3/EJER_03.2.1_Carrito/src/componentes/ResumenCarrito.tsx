interface Props {
    carrito: {
        cantidad: number;
        subtotal: number;
    };
}

const formatoEuro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

export default function ResumenCarrito({ carrito }: Props) {
    const envioGratis = carrito.subtotal >= 50;

    const gastosEnvio = envioGratis ? 0 : 4.95;

    const total = carrito.subtotal + gastosEnvio;

    const faltante = Math.max(0, 50 - carrito.subtotal);

    const progreso = Math.min(
        100,
        (carrito.subtotal / 50) * 100
    );

    return (
        <section>
            <h2>Resumen del carrito</h2>

            <p>Unidades: {carrito.cantidad}</p>

            <p>Subtotal: {formatoEuro.format(carrito.subtotal)}</p>

            <p>Envío: {formatoEuro.format(gastosEnvio)}</p>

            {envioGratis ? (
                <p>¡Envío gratis!</p>
            ) : (
                <>
                    <p>
                        Te faltan {formatoEuro.format(faltante)} para el envío gratis
                    </p>

                    <progress value={progreso} max="100" />
                </>
            )}

            <h3>Total: {formatoEuro.format(total)}</h3>
        </section>
    );
}