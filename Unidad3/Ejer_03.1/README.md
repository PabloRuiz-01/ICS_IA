
# Lista de tareas

Aplicación desarrollada con React y TypeScript para gestionar tareas,
filtrarlas por prioridad y consultar su estado de finalización.

## Componentes

- **App.tsx:** gestiona la lista de tareas y el filtro de prioridad,
  calcula las tareas visibles y coordina los componentes.
- **Filtros.tsx:** muestra los botones para filtrar las tareas por
  prioridad y permite seleccionar el filtro activo.
- **ResumenTareas.tsx:** muestra un mensaje según las tareas visibles,
  su estado de finalización y el total de tareas.
- **ListaTareas.tsx:** recorre las tareas visibles y renderiza un
  componente individual para cada una.
- **Tarea.tsx:** muestra los datos de una tarea, su prioridad y un
  control accesible para marcarla como completada o pendiente.
- **types.ts:** define los tipos y las interfaces compartidos por
  los componentes.

## Funcionalidades

- Filtrado por todas las tareas y por prioridad alta, media o baja.
- Identificación visual de la prioridad mediante colores y texto.
- Marcado de tareas como completadas o pendientes.
- Estilo tachado y fondo tenue para las tareas completadas.
- Resumen dinámico según las tareas visibles.

## Tecnologías

- React
- TypeScript
- CSS
