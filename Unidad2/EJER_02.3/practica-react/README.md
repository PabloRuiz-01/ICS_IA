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

const media: string = calcularMedia([6, 7, 8]);
calcularMedia([6, '7', 8]);

const hoy = new Date();
hoy.sumarDias(3);

let aprobado = true;
aprobado = 'sí';