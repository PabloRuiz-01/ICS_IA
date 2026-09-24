"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelos_1 = require("../dist/modelos");
const alumnos = [
    {
        id: 1,
        nombre: "Pablo",
        edad: 25,
        curso: modelos_1.Curso.Daw,
    },
    {
        id: 2,
        nombre: "Sergio",
        edad: 19,
        curso: modelos_1.Curso.Dam,
    },
];
function mostrarAlumnos(alumnos, estado) {
    console.log(`Estado: ${estado}`);
    alumnos.forEach((alumno) => {
        console.log(`${alumno.id} - ${alumno.nombre} - ${alumno.edad} años - ${alumno.curso}`);
    });
}
mostrarAlumnos(alumnos, "activo");
//# sourceMappingURL=principal.js.map