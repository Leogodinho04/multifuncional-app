import { useState } from "react";

function CepSearch() {
  const [cep, setCep] = useState("");
  const [info, setInfo] = useState(null);

  const fetchCep = async () => {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (data.erro) throw new Error("CEP não encontrado");
      setInfo(data);
    } catch (err) {
      setInfo({ erro: true });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Buscador de CEP</h2>
      <input
        className="border p-2 mr-2"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={fetchCep} className="bg-blue-500 text-white px-3 py-1 rounded">
        Buscar
      </button>
      {info && !info.erro && (
        <div className="mt-4">
          <p><strong>Rua:</strong> {info.logradouro}</p>
          <p><strong>Bairro:</strong> {info.bairro}</p>
          <p><strong>Cidade:</strong> {info.localidade}</p>
          <p><strong>Estado:</strong> {info.uf}</p>
        </div>
      )}
      {info?.erro && <p className="text-red-500 mt-2">CEP não encontrado.</p>}
    </div>
  );
}

export default CepSearch;
