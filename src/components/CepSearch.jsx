import { useState } from "react";

function CepSearch() {
  const [cep, setCep] = useState("");
  const [info, setInfo] = useState(null);
  const [showError, setShowError] = useState(false);

  const fetchCep = async () => {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (data.erro) throw new Error("CEP não encontrado");
      setInfo(data);
      setShowError(false);
    } catch (err) {
      setInfo(null);
      setShowError(true);
    }
  };

  const closePopup = () => {
    setShowError(false);
    setCep("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Buscador de CEP</h2>
      <input
        className="bg-gray-800 text-white border p-2 mr-2 rounded"
        value={cep}
        onChange={(e) => {
          let raw = e.target.value.replace(/\D/g, "").slice(0, 8);
          if (raw.length > 5) {
            raw = raw.slice(0, 5) + "-" + raw.slice(5);
          }
          setCep(raw);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") fetchCep();
        }}
        placeholder="Digite o CEP"
      />
      <button onClick={fetchCep} className="bg-red-600 text-white px-3 py-1 rounded">
        Buscar
      </button>

      {info && (
        <div className="mt-4">
          <p><strong>Rua:</strong> {info.logradouro}</p>
          <p><strong>Bairro:</strong> {info.bairro}</p>
          <p><strong>Cidade:</strong> {info.localidade}</p>
          <p><strong>Estado:</strong> {info.uf}</p>
        </div>
      )}

      {/* Pop-up de erro */}
      {showError && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">CEP não encontrado</h2>
            <button
              onClick={closePopup}
              className="bg-red-600 px-4 py-2 rounded font-bold"
            >
              Tente Novamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CepSearch;
