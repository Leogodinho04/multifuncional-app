import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return;
    let res;
    switch (op) {
      case "+": res = a + b; break;
      case "-": res = a - b; break;
      case "*": res = a * b; break;
      case "/": res = b !== 0 ? a / b : "Erro (divisão por zero)"; break;
      default: return;
    }
    setResult(res);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Calculadora</h2>
      <input className="border p-2 mr-2" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Número 1" />
      <input className="border p-2 mr-2" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Número 2" />
      <div className="my-2">
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            onClick={() => handleOperation(op)}
            className="bg-gray-300 px-3 py-1 mx-1 rounded"
          >
            {op}
          </button>
        ))}
      </div>
      {result !== null && <p>Resultado: {result}</p>}
    </div>
  );
}

export default Calculator;
