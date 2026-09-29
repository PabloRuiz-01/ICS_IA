export function saludo() {
  return<p>¡Hola, clase!</p>;
}

//Falta un espacio entre el return y <p> esto produce un error de sintaxis

//Corregido

export function saludo() {
  return <p>¡Hola, clase!</p>;
}
