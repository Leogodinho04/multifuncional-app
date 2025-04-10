function Header({ setPage }) {
  const pages = ["To-Do List", "Contador de Cliques", "Jogo da Velha", "Calculadora", "Buscador de CEP"];

  return (
    <header className="bg-red-600 text-white p-4 flex gap-2 flex-wrap justify-center shadow-md">
      {pages.map((page) => (
        <button
          key={page}
          className="bg-white text-red-600 hover:bg-red-100 px-3 py-1 rounded transition"
          onClick={() => setPage(page)}
        >
          {page}
        </button>
      ))}
    </header>
  );
}
  
  export default Header;