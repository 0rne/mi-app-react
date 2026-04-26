import { useState } from "react";

function InputTexto() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Escribí algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <p>Texto: {texto}</p>
    </div>
  );
}

export default InputTexto;