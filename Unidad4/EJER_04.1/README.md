# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

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
--- Respuestas ---

--Ejercicio1--
1--En consola 0, el valor de h3 sera 1
2--En el primer click el resultado sera 2 y en el segundo click sera 6
3--El código original no sumaba 3 porque las tres llamadas utilizaban el mismo valor de cuenta

--Ejercicio4--
Fragmento 1--- Es un dato derivado por lo que no necesitamos useState ni useEffect
Fragmento 2--- Tenemos un manejador específico para ese evento: manejarEnvio, no necesitamos guardar otro estado
Fragmento 3---Al cambiar idAlumno, también cambia key, por lo que React desmonta la ficha anterior y crea una nueva con el estado inicial vacío.

--Ejercicio5--
--Porque campoCorreo.current puede ser null si el elemento todavía no está disponible o no está montado.El operador ?. comprueba que no sea null antes de ejecutar focus()

--Ejercicio6--
--Se guarda en una ref porque no necesitamos mostrarlo en pantalla ni provocar un renderizado cuando cambia.Si lo guardáramos en el estado, cada vez que actualizáramos su valor, React provocaría un nuevo renderizado innecesario.

--Ejercicio7--
--La media es un dato derivado del estado de los alumnos, por lo que se calcula directamente con reduce() en lugar de almacenarse en otro estado, evitando duplicar información y mantener datos sincronizados.


