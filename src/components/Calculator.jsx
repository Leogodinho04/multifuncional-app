import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleEqual = () => {
    try {
      const res = eval(input); // simples para demonstração
      setResult(res);
    } catch {
      setResult("Erro");
    }
  };

  return (
    <div className="p-4 flex justify-center">
      <div className="bg-red-600 text-white p-6 rounded-lg shadow-md w-64">
        <h2 className="text-xl font-bold mb-4 text-center">Calculadora</h2>
        <input
          className="w-full p-2 mb-2 rounded"
          style={{
            backgroundColor: "#c1f0c1", // verde visor
            color: "#003300",           // texto verde escuro
            fontFamily: "monospace",
            fontSize: "1.2rem"
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite a conta"
        />
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "%", "+"].map((btn) => (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className="py-2 rounded text-lg font-bold bg-gray-800"
              >
                {btn}
              </button>
          ))}
          <button
            onClick={handleEqual}
            className="col-span-2 bg-green-600 py-2 rounded font-bold"
          >
            =
          </button>
          <button
            onClick={handleClear}
            className="col-span-2 bg-gray-800 py-2 rounded font-bold"
          >
            C
          </button>
        </div>
        {result !== null && (
          <p className="mt-4 text-center text-lg">
            Resultado: <span className="font-bold">{result}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Calculator;
