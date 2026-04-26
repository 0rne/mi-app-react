import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Saludo from './componentes/saludo';
import Titulo from './componentes/titulo';
import Bienvenida from './componentes/bienvenida';
import Lista from './componentes/lista';
import Contador from './componentes/contador';
import InputTexto from './componentes/inputtexto';
import ListaTareas from './componentes/listatareas';
import ToggleMensaje from './componentes/togglemensaje';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Titulo />
      <Saludo />
      <Bienvenida nombre="Orne" />
      <Lista />
      <Contador />
      <InputTexto />

      <ListaTareas />

      <ToggleMensaje />
    </>
  )
}

export default App
