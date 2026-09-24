/*Ejercicio 5  — Mini proyecto. Organizar un proyecto con los .ts en src/ (por ejemplo modelos.ts con las interfaces Alumno y 
Curso, y principal.ts con la lógica), configurar tsconfig.json con rootDir: "./src", outDir: "./dist", excluyendo cualquier 
archivo con errores deliberados (exclude) e incluyendo explícitamente principal.ts (include). El proyecto debe combinar al 
menos una interfaz, un enum, un tipo unión, una función tipada con array de objetos y comprobar que tsc -w recompila 
automáticamente al guardar cambios en src/.*/

export interface Alumno {
  id: number;
  nombre: string;
  edad: number;
  curso: Curso;
}

export interface CursoInfo {
  nombre: string;
  alumnos: Alumno[];
}

export enum Curso {
  Daw = "Daw",
  Dam = "Dam",
  Sistemas = "Sistemas microinformaticos",
}

export type EstadoAlumno = "activo" | "inactivo" | "pendiente";

