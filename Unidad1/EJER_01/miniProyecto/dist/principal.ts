import { Alumno, Curso, EstadoAlumno } from "../modelos";

const alumnos: Alumno[] = [
  {
    id: 1,
    nombre: "Pablo",
    edad: 25,
    curso: Curso.Daw,
  },
  {
    id: 2,
    nombre: "Sergio",
    edad: 19,
    curso: Curso.Dam,
  },
];

function mostrarAlumnos(
  alumnos: Alumno[],
  estado: EstadoAlumno
): void {
  console.log(`Estado: ${estado}`);

  alumnos.forEach((alumno: Alumno) => {
    console.log(
      `${alumno.id} - ${alumno.nombre} - ${alumno.edad} años - ${alumno.curso}`
    );
  });
}

mostrarAlumnos(alumnos, "activo");
