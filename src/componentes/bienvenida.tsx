type Props = {
  nombre: string;
};

function Bienvenida({ nombre }: Props) {
  return <h2>Bienvenido {nombre}</h2>;
}

export default Bienvenida;