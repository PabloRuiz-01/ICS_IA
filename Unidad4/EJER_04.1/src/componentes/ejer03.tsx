import { useEffect, useState } from "react";

interface RelojProps {
    zonaHoraria?: string;
}

function Reloj({ zonaHoraria = "Europe/Madrid" }: RelojProps) {

    const [hora, setHora] = useState(() => new Date());

    useEffect(() => {

        const intervalo = setInterval(() => {
            setHora(new Date());
            console.log("tic");
        }, 1000);

        return () => {
            clearInterval(intervalo);
        };

    }, []);

    return (
        <section>
            <h3>{zonaHoraria}</h3>

            <p>
                {hora.toLocaleTimeString("es-ES", {
                    timeZone: zonaHoraria
                })}
            </p>
        </section>
    );
}

export default Reloj;
