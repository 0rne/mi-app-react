import { useState } from "react";

function ToggleMensaje() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Mostrar"} mensaje
      </button>

      {mostrar && <p>Este es el mensaje oculto 👀 </p>}
    </div>
  );
}

export default ToggleMensaje;