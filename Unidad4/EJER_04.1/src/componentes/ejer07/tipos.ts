export interface Alumno {
    id: string;
    nombre: string;
    nota: number;
}

export type Accion =
    | {
        tipo: "anadir";
        id: string;
        nombre: string;
        nota: number;
    }
    | {
        tipo: "cambiarNota";
        id: string;
        nota: number;
    }
    | {
        tipo: "eliminar";
        id: string;
    }
    | {
        tipo: "cargar";
        alumnos: Alumno[];
    }
    | {
        tipo: "vaciar";
    };
