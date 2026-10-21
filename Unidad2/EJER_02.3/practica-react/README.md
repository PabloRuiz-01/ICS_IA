# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

A1. ¿Qué tipo se infiere? Sin ejecutar nada, escribe como comentario el tipo que TypeScript infiere para cada variable. Después compruébalo pasando el cursor por encima.

let ciudad = 'Oviedo'; //string
let habitantes = 220000; //number
let esCapital = true; // Boolean
const notas = [7.5, 8, 9.25]; // number[]
const fechaExamen = new Date(2026, 11, 15); // Date
let pendiente; // Any

Pregunta: ¿por qué pendiente no tiene un tipo útil? Corrígelo con una anotación para que solo admita textos.

Porque no tiene asignado ningun valor inicial ni ningun tipo, para que solo admita textos habria que definierlo como:
 let pendiente: string;

A2. Encuentra los errores. El siguiente código tiene cuatro errores de tipo. Localízalos, explica cada uno en un comentario y corrígelos sin usar any.

function calcularMedia(notas: number[]): number {
  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

const media: string = calcularMedia([6, 7, 8]); // La funcion se definio como tipo number pero la constante como tipo string
calcularMedia([6, '7', 8]); // calcularMedia es un tipo array de numeros, en cambio se le esta pasando un tipo estring

const hoy = new Date();
hoy.sumarDias(3); // Hoy es un tipo date y detro de date no existe sumarDias se tendria que usar setDate()

let aprobado = true;
aprobado = 'sí'; //Aqui el tipo inicial es un booleano pero se cambia a un string

A3. Funciones con tipos. Escribe una función calcularPrecioFinal que reciba un precio, un porcentaje de IVA y un descuento opcional (también en porcentaje) y devuelva el precio final. Anota los parámetros y el tipo de retorno.

function calcularPrecioFinal( precio: number, iva : number, descuento? : number):number{

   const precioDescuento= descuento !== undifined ?precio *(1-descuento/100):precio;

   return precioDescuento*(1-iva/100)
}

calcularPrecioFinal(100, 21);      // 121
calcularPrecioFinal(100, 21, 10);  // 108.9
 
A4. De any a unknown. El siguiente código compila, pero falla en ejecución.

const respuesta: any = JSON.parse('{"titulo": "Dune", "paginas": 412}');
console.log(respuesta.autor.toUpperCase());

1Explica por qué TypeScript no avisa del error.
  No muestra error porque es de tipo any

2Cambia any por unknown y observa qué ocurre.
  Muestra el error de que el tipo de dato es desconocido por lo que te impide ejecutar el programa para evitar fallos en produccion

3Escribe una guarda de tipo esLibro(valor: unknown): valor is Libro, siendo type Libro = { titulo: string; paginas: number }. Úsala para mostrar el título solo cuando los datos sean válidos.

type Libro = {
  titulo: string;
  paginas: number;
};

// Guarda de tipo (type guard)
function esLibro(valor: unknown): valor is Libro {
  return (
    typeof valor === "object" &&
    valor !== null &&
    "titulo" in valor &&
    typeof valor.titulo === "string" &&
    "paginas" in valor &&
    typeof valor.paginas === "number"
  );
}

const respuesta: any = JSON.parse('{"titulo": "Dune", "paginas": 412}');
console.log(respuesta);

A5. Pregunta teórica. Explica con tus palabras la diferencia entre unknown y never, y pon un ejemplo de función que devuelva never.
unknown puede ser de cualquier tipo, pero con una capa de seguridad para que no puedas usarlo en operaciones y no le puedas cambiar el tipo, mientras que never es del tipo imposible que entra en accion cuando pasa algo que nunca ocurre por ejemplo cuando hay un error o un bucle infinito


function lanzarErrorCritico(mensaje: string): never {
    throw new Error(mensaje);
}

B1. Alias de tipo y propiedades opcionales. Crea un alias Libro con estas propiedades: 

type Libro = {
  isbn: string;
  titulo: string;
  autor: string;
  anioPublicacion: number;
  paginas?: number;
}

Declara dos libros, uno con paginas y otro sin ella. Después intenta asignar libro.editorial = 'Anaya' y explica el error.

const libro1:Libro =  {
  "isbn": "qw5431",
  "titulo": "El señor de los anillos",
  "autor": "J.R.R.Tolkien",
  "anioPublicacion": 1954,
  "paginas": 1392
};
const libro2 :Libro= {
  "isbn": "fgf564",
  "titulo": "El hobitt",
  "autor": "J.R.R.Tolkien",
  "anioPublicacion": 1937
};
libro1.editorial="Anaya";

El error ocurre porque la propiedad editorial no existe.

B2. Tipos de unión. Crea un tipo EstadoPrestamo que solo admita 'disponible', 'prestado' o 'reservado'. Añádelo como propiedad estado al tipo Libro. Comprueba que estado: 'perdido' da error.
type EstadoPrestamo = 'disponible' | 'prestado' | 'reservado'

type Libro = {
  isbn: string;
  titulo: string;
  autor: string;
  anioPublicacion: number;
  paginas?: number;
  estado: EstadoPrestamo;
}

const libro1:Libro =  {
  "isbn": "qw5431",
  "titulo": "El señor de los anillos",
  "autor": "J.R.R.Tolkien",
  "anioPublicacion": 1954,
  "paginas": 1392,
  "estado": "disponible"
};
const libro2 :Libro= {
  "isbn": "fgf564",
  "titulo": "El hobitt",
  "autor": "J.R.R.Tolkien",
  "anioPublicacion": 1937,
  "estado": "perdido"
};

B3. Tipos de función. Crea un alias Prestar para una función que recibe el nombre de un alumno y no devuelve nada. Crea después un tipo LibroPrestable que sea la intersección de Libro con { prestar: Prestar }. Declara un objeto de ese tipo cuya función prestar muestre en consola "<titulo> prestado a <alumno>". No anotes el tipo del parámetro de la función: deja que TypeScript lo infiera.

type Prestar = (alumno: string) => void;

type libroPrestable = Libro & {
  prestar: Prestar;
}


const libro3: libroPrestable = {
  "isbn": "qw5431",
  "titulo": "El señor de los anillos",
  "autor": "J.R.R.Tolkien",
  "anioPublicacion": 1954,
  "paginas": 1392,
  "estado": "disponible",
  prestar(alumno){
    console.log(`${this.titulo} prestado a ${alumno}`)
  }
}

libro3.prestar("Sergio");



interface LibroDigital extends Libro{
  tamanoMB:number;
}

No podria ser una interfaz porque no permite los mismos tipos que type, como por ejemplo los tipos union