/*
// Archivo: src/Cabecera.jsx
export function Cabecera() {
  return<header>Mi aplicación</header>;
}

// Archivo: src/App.jsx
import Cabecera from './Cabecera';
*/

//Error de importación, porque no existe una exportación default en Cabecera.jsx.

//Corregido

// Archivo: src/Cabecera.jsx
export function Cabecera() {
  return <header>Mi aplicación</header>;
}

// Archivo: src/App.jsx
import { Cabecera } from './Cabecera';
