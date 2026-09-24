"use strict";
/*Ejercicio 5  — Mini proyecto. Organizar un proyecto con los .ts en src/ (por ejemplo modelos.ts con las interfaces Alumno y
Curso, y principal.ts con la lógica), configurar tsconfig.json con rootDir: "./src", outDir: "./dist", excluyendo cualquier
archivo con errores deliberados (exclude) e incluyendo explícitamente principal.ts (include). El proyecto debe combinar al
menos una interfaz, un enum, un tipo unión, una función tipada con array de objetos y comprobar que tsc -w recompila
automáticamente al guardar cambios en src/.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso;
(function (Curso) {
    Curso["Daw"] = "Daw";
    Curso["Dam"] = "Dam";
    Curso["Sistemas"] = "Sistemas microinformaticos";
})(Curso || (exports.Curso = Curso = {}));
//# sourceMappingURL=modelos.js.map