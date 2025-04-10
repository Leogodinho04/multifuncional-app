import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-[#2b2b2b] text-white flex justify-center pt-10">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Contador de Cliques</h2>
        <p className="text-lg mb-4">
          Você clicou {count} {count === 1 ? "vez" : "vezes"}
        </p>
        <div className="space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Clique aqui
          </button>
          <button
            onClick={resetCounter}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Resetar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClickCounter;
