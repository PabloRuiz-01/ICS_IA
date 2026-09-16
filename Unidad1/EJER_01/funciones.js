function mostrarMensaje(tarjeta, elemento) {

const informacion = elemento.querySelector(".informacion");

let mensaje = "";

switch (tarjeta) {

    case "lanzamientos":
        mensaje = "Descubre los videojuegos más recientes, las novedades de la industria y los títulos que acaban de llegar a GameZone.";
        break;

    case "ofertas":
        mensaje = "Encuentra grandes descuentos en videojuegos, ediciones especiales y contenido para tus juegos favoritos.";
        break;

    case "plataformas":
        mensaje = "Encuentra videojuegos para PC, PlayStation, Xbox, Nintendo Switch y muchas otras plataformas.";
        break;

    default:
        mensaje = "Información no disponible.";
}

// Si está visible, la ocultamos
if (informacion.style.display === "block") {

    informacion.style.display = "none";
    informacion.textContent = "";

} else {

    // Si está oculta, mostramos la información
    informacion.textContent = mensaje;
    informacion.style.display = "block";
}


}