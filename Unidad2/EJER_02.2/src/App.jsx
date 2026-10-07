//1.1
// Uso en App.jsx
<Saludo nombreAlumno="Lucía" />

// Saludo.jsx
export function Saludo({ nombreAlumno }) {
  return<p>¡Hola, {nombreAlumno}!</p>;
}

//1.2

import { useState } from "react";

export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (encendido = !encendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}

//1.3
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={()=>setValor(valor + 1)}>Pulsado {valor} veces</button>;
}

//1.4

//Necesita importar useState de react, ya esta echo en el apratado 1.2
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>{valor}</button>;
}

//1.5
export function BotonEnviar({ onEnviar }) {
  function manejarClic() {
    onEnviar();
  }
  return<button onClick={manejarClic}>Enviar</button>;
}

// En App.jsx
<BotonEnviar onEnviar={() => console.log('Enviado')} />

//1.6
export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}