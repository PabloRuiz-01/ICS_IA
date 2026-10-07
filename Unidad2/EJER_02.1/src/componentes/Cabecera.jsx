import { RelojEstatico } from './relojEstatico';

export function Cabecera() {
  const nombreModulo = 'Desarrollo Web en Entorno Cliente';

  return (
    <header>
      <h1>{nombreModulo}</h1>
      <RelojEstatico />
    </header>
  );
}
