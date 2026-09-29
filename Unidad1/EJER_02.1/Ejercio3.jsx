/*
// Archivo: src/Pie.jsx
function Pie() {
  return<footer>© Departamento de Informática</footer>;
}

// Archivo: src/App.jsx
import { Pie } from './Pie';
*/


// Error de importación, porque ./Pie no proporciona una exportación llamada Pie

//Corregido

// Archivo: src/Pie.jsx
export function Pie() {
  return <footer>© Departamento de Informática</footer>;
}

// Archivo: src/App.jsx
import { Pie } from './Pie';
