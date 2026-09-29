export function Fecha() {
  const anioActual = new Date().getFullYear();
  return<p>Estamos en el año anioActual</p>;
}

//La página mostrará literalmente “Estamos en el año anioActual” en vez del año actual.

//Corregido

export function Fecha() {
  const anioActual = new Date().getFullYear();
  return <p>Estamos en el año {anioActual}</p>;
}
