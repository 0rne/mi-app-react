import { useState } from "react";

function ListaTareas() {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState<string[]>([]);

  const agregarTarea = () => {
    if (tarea.trim() === "") return;

    setLista([...lista, tarea]);
    setTarea("");
  };

  const eliminarTarea = (index: number) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  };

  return (
    <div>
      <h2>Lista de tareas</h2>

      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escribí una tarea..."
      />

      <button onClick={agregarTarea}>Agregar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => eliminarTarea(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;