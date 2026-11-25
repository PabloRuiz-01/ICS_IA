import { useEffect, useRef, useState } from "react";

function Cronometro() {
    const [tiempo, setTiempo] = useState(0);

    const [vueltas, setVueltas] = useState<number[]>([]);

    const intervaloRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const inicioRef = useRef<number | null>(null);

    const tiempoAcumuladoRef = useRef(0);

    const estaCorriendo = intervaloRef.current !== null;

    function formatearTiempo(decimas: number): string {
        const minutos = Math.floor(decimas / 600);
        const segundos = Math.floor((decimas % 600) / 10);
        const decima = decimas % 10;

        return (
            String(minutos).padStart(2, "0") +
            ":" +
            String(segundos).padStart(2, "0") +
            "." +
            decima
        );
    }

    function actualizarTiempo() {
        if (inicioRef.current === null) return;

        const transcurrido =
            Date.now() - inicioRef.current + tiempoAcumuladoRef.current;

        setTiempo(Math.floor(transcurrido / 100));
    }

    function manejarIniciar() {
        if (intervaloRef.current !== null) return;

        inicioRef.current = Date.now();

        intervaloRef.current = setInterval(() => {
            actualizarTiempo();
        }, 100);
    }

    function manejarParar() {
        if (intervaloRef.current === null) return;

        actualizarTiempo();

        clearInterval(intervaloRef.current);
        intervaloRef.current = null;

        tiempoAcumuladoRef.current = tiempo;
        inicioRef.current = null;
    }

    function manejarVuelta() {
        if (intervaloRef.current === null) return;

        setVueltas((anteriores) => [
            ...anteriores,
            tiempo,
        ]);
    }

    function manejarReiniciar() {
        if (intervaloRef.current !== null) {
            clearInterval(intervaloRef.current);
        }

        intervaloRef.current = null;
        inicioRef.current = null;
        tiempoAcumuladoRef.current = 0;

        setTiempo(0);
        setVueltas([]);
    }

    useEffect(() => {
        return () => {
            if (intervaloRef.current !== null) {
                clearInterval(intervaloRef.current);
            }
        };
    }, []);

    return (
        <main>
            <h1>Cronómetro</h1>

            <h2>{formatearTiempo(tiempo)}</h2>

            <div>
                <button
                    onClick={manejarIniciar}
                    disabled={estaCorriendo}
                >
                    Iniciar
                </button>

                <button
                    onClick={manejarParar}
                    disabled={!estaCorriendo}
                >
                    Parar
                </button>

                <button
                    onClick={manejarVuelta}
                    disabled={!estaCorriendo}
                >
                    Vuelta
                </button>

                <button onClick={manejarReiniciar}>
                    Reiniciar
                </button>
            </div>

            <h3>Vueltas</h3>

            {vueltas.length === 0 ? (
                <p>Todavía no hay vueltas.</p>
            ) : (
                <ol>
                    {vueltas.map((vuelta, indice) => (
                        <li key={indice}>
                            Vuelta {indice + 1}: {formatearTiempo(vuelta)}
                        </li>
                    ))}
                </ol>
            )}
        </main>
    );
}

export default Cronometro;
