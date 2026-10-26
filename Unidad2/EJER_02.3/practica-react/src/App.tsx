// import { useState } from 'react'
import './App.css'
import './TarjetaLibro.tsx'
import TarjetaLibro from './TarjetaLibro.tsx'
import ListaPrestamos from './ListaPrestamos.tsx'

function App() {
    const prestarLibro = () => {
    alert('¡Préstamo registrado!');
    }
  // const [count, setCount] = useState(0)

  return (
    <> 
    <main>
      <TarjetaLibro
      Titulo='El señor de los anillos'
      Autor='JJR Tolkien'
      Estado='disponible'
      alprestar={prestarLibro}
      />
      <TarjetaLibro
      Titulo='El Hobit'
      Autor='JJR Tolkien'
      Estado='prestado'
      alprestar={prestarLibro}
      />
      <TarjetaLibro
      Titulo='Jurasic Park'
      Autor='Michael Crichton'
      Estado='reservado'
      alprestar={prestarLibro}
      />

      <ListaPrestamos/>

    </main>
    </>
  )
}


export default App
