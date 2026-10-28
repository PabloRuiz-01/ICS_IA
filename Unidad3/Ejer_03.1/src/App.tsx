import { useState } from 'react'
import type { Tarea, FiltroPrioridad } from "./tipos";
import Filtros from "./componentes/Filtros";
import ResumenTareas from "./componentes/ResumenTareas";
import ListaTareas from "./componentes/ListaTareas";



const tareasIniciales: Tarea[] = [
  { id: 1, texto: "Aprender sobre renderizado de listas en React", completada: true, prioridad: "alta" },
  { id: 2, texto: "Implementar el filtrado de tareas", completada: false, prioridad: "alta" },
  { id: 3, texto: "Entender cómo se eleva el estado", completada: false, prioridad: "media" },
  { id: 4, texto: "Estilizar los componentes con Bootstrap", completada: true, prioridad: "baja" },
  { id: 5, texto: "Crear el componente de resumen condicional", completada: false, prioridad: "media" },
  { id: 6, texto: "Desplegar la aplicación en Netlify", completada: false, prioridad: "baja" },
];

function App() {

  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales)
  const [filtroPrioridad, setFiltroPrioridad] = useState<FiltroPrioridad>("todas")

  const tareasVisibles = tareas.filter(
    (tarea) =>
      filtroPrioridad === "todas" ||
      tarea.prioridad === filtroPrioridad
  );

  const cambiarCompletada = (id: number) => {
    setTareas((tareasActuales) =>
      tareasActuales.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  };


  return (

    <main>
      <h1>Lista de tareas</h1>

      <Filtros
        filtroSeleccionado={filtroPrioridad}
        onCambiarFiltro={setFiltroPrioridad}
      />


      <ResumenTareas
        tareasVisibles={tareasVisibles}
        totalTareas={tareas.length}
      />


      <ListaTareas
        tareas={tareasVisibles}
        onCambiarCompletada={cambiarCompletada}
      />
    </main>

  )
}

export default App
