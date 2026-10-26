import { useState } from "react";

type Prestamo = {
    id: number;
    titulo: string;
    alumno: string;
    devuelto: boolean;
};

export default function ListaPrestamos() {
    const [prestamos, setPrestamos] = useState<Prestamo[]>([
        {
            id: 1,
            titulo: "El señor de los anillos",
            alumno: "Pablo",
            devuelto: false
        },
        {
            id: 2,
            titulo: "Jurasic Park",
            alumno: "Sergio",
            devuelto: false
        }
    ]);
    const [prestamoSeleccionado, setprestamoSeleccionado] = useState<Prestamo | null>(null);

    const marcarComoDevuelto = (id: number) => {
        console.log(id)
        setPrestamos((prestamosActuales) =>
            prestamosActuales.map((prestamo) =>
                prestamo.id === id ? { ...prestamo, devuelto: true } : prestamo));
    };

    return (
        <>
            <h2>Lista de prestamos</h2>
            {prestamos.map((prestamo) => (
                <article key={prestamo.id}>
                    <h3>{prestamo.titulo}</h3>
                    <p>Alumno:{prestamo.alumno}</p>
                    <p>Estado:{prestamo.devuelto ? 'Devuelto' : 'Pendiente'}</p>
                    {/* <button onClick={()=>setprestamoSeleccionado}>Selccionar prestamo</button> */}
                    {!prestamo.devuelto && (
                        <button onClick={() => marcarComoDevuelto(prestamo.id)}>Marcar como devuelto</button>
                    )}
                </article>
            ))}
            <p>Prestamo selccionado:{''}
                {prestamoSeleccionado ? prestamoSeleccionado.titulo : 'Ninguno'}
            </p>
        </>
    )

}