/*export function Tarjeta() {
  return (
    <h2>Desarrollo Web en Entorno Cliente</h2>
    <p>Segundo curso de DAW</p>
  );
}*/

//Error de compilación de JSX, porque una expresión JSX debe tener un único elemento raíz.


//Corregido

export function Tarjeta() {
  return (
    <>
      <h2>Desarrollo Web en Entorno Cliente</h2>
      <p>Segundo curso de DAW</p>
    </>
  );
}
