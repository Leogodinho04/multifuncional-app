function Header({ setPage }) {
    const pages = ["To-Do List", "Contador de Cliques", "Jogo da Velha", "Calculadora", "Buscador de CEP"];
  
    return (
      <header className="bg-gray-800 text-white p-4 flex gap-2 flex-wrap">
        {pages.map((page) => (
          <button
            key={page}
            className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded"
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        ))}
      </header>
    );
  }
  
  export default Header;