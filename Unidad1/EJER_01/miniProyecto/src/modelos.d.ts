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
export declare enum Curso {
    Daw = "Daw",
    Dam = "Dam",
    Sistemas = "Sistemas microinformaticos"
}
export type EstadoAlumno = "activo" | "inactivo" | "pendiente";
//# sourceMappingURL=modelos.d.ts.map