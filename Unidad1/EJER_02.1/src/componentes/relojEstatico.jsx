export const relojEstatico = () => {
  const hora = new Date().toLocaleTimeString('es-ES');

  return <p>Hora actual: {hora}</p>;
};
