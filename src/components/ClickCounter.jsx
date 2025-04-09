import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Contador de Cliques</h2>
      <p className="text-lg mb-2">Você clicou {count} vezes</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Clique aqui
      </button>
    </div>
  );
}

export default ClickCounter;
