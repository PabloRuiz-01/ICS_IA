//======Ejercicio 1======

/*Instalar y configurar TypeScript. Instalar TypeScript de forma global (npm i -g typescript), comprobar la versión de npm, crear 
una carpeta de proyecto con un index.html básico y un archivo principal.ts que solo contenga un 
console.log('Hola TypeScript'). Compilarlo con tsc principal.ts y comprobar que se genera principal.js. Por último, ejecutar 
tsc --init para generar tsconfig.json. 
*/

console.log('Hola TypeScript')

//======Ejercicio 2======

/*Ejercicio 2 — Tipos básicos, inferencia y objetos. Declarar variables edad (number), nombre (string) y esActivo (boolean), unas 
veces dejando que TypeScript infiera el tipo y otras anotándolo explícitamente; provocar y corregir errores de tipos. Después crear 
un objeto tipado persona: { nombre: string; edad: number; esSocio: boolean } e intentar asignarle una propiedad 
inexistente (persona.apellido) para observar el error. */

let edad: number=25
let nombre:string="Pablo"
let esActivo: boolean=true

let edad2=25
let nombre2="Pablo"
let esActivo2=true

/*

let edad2="25"
let nombre2=356
let esActivo2="true"

*/


const persona:{
    nombre:string,
    edad:number,
    esSocio:boolean
}={
    nombre:"Pablo",
    edad:25,
    esSocio:true
}

//persona.apellido="Ruiz"

//======Ejercicio 3======

/*Ejercicio 3 — Interfaces, arrays y funciones tipadas. Definir una interfaz Alumno con nombre (string), nota (number) y 
activo (boolean, opcional), crear un array alumnos: Alumno[] con al menos cuatro registros, y escribir una función 
calcularMedia(alumnos: Alumno[]): number que devuelva la nota media usando reduce. Añadir una segunda función 
mostrarResumen(alumno: Alumno): void que imprima por consola sus datos, y forzar un error de tipos llamando a calcularMedia con un 
argumento incorrecto. */


interface Alumno{
    nombre:string
    nota:number
    activo?:boolean
}

const alumnos:Alumno[]=[
    {nombre:"Pablo",
        nota:10,
        activo:true
    },
    {nombre:"Sergio",
        nota:8,
        activo:true
    },
    {nombre:"Silvia",
        nota:7,
        activo:false
    },
    {nombre:"Jorge",
        nota:5,
    },
]

function calcularMedia(alumnos:Alumno[]):number {
    const suma=alumnos.reduce((total,alumno)=>total+alumno.nota,0)

    return suma/alumnos.length
}

function mostrarResumenname(alumno: Alumno):void {
    console.log("Nombre:", alumno.nombre);
    console.log("Nota:", alumno.nota);
    console.log("Activo:", alumno.activo ?? "No indicado");
}

const media = calcularMedia(alumnos);

console.log("Nota media:", media);

// calcularMedia("hola");

//======Ejercicio 4======

/*Ejercicio 4 — Uniones, tipos literales y enums. Crear enum Rol { ADMIN, EDITOR, LECTOR } y una interfaz Usuario que use 
ese enum y un tipo unión estado: 'activo' | 'inactivo' | 'pendiente'. Escribir una función describirUsuario(usuario: Usuario): string 
que, según el rol y el estado, devuelva un mensaje distinto (usando comparaciones sobre el tipo literal y el enum), y una matriz 
usuarios: Usuario[] con varios casos, incluido uno con un valor de estado inválido para comprobar que TypeScript lo rechaza */

enum Rol {
    ADMIN,
    EDITOR,
    LECTOR
}

type estado = "activo" | "inactivo" | "pendiente";

interface Usuario {
    nombre: string;
    rol: Rol;
    estado: estado;
}

function describirUsuario(usuario: Usuario): string {

    switch (usuario.estado) {
        case "pendiente":
            return `${usuario.nombre} está pendiente de activación.`;

        case "inactivo":
            return `${usuario.nombre} está inactivo.`;

        default:
            break;
    }

    switch (usuario.rol) {
        case Rol.ADMIN:
            return `${usuario.nombre} es administrador y está activo.`;

        case Rol.EDITOR:
            return `${usuario.nombre} es editor y está activo.`;

        case Rol.LECTOR:
            return `${usuario.nombre} es lector y está activo.`;

        default:
            return `${usuario.nombre} tiene un rol desconocido.`;
    }
}

const usuarios: Usuario[] = [
    {
        nombre: "Pablo",
        rol: Rol.ADMIN,
        estado: "activo"
    },
    {
        nombre: "Sergio",
        rol: Rol.EDITOR,
        estado: "activo"
    },
    {
        nombre: "Silvia",
        rol: Rol.LECTOR,
        estado: "inactivo"
    },
    {
        nombre: "Jorge",
        rol: Rol.ADMIN,
        estado: "pendiente"
    }
];


// Mostrar los usuarios
usuarios.forEach(usuario => {
    console.log(describirUsuario(usuario));
});

/*
// ERROR: "bloqueado" no pertenece al tipo estado
const usuarioInvalido: Usuario = {
    nombre: "Jorge",
    rol: Rol.LECTOR,
    estado: "bloqueado"
};
*/