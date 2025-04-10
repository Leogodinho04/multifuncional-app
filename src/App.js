import { useState } from "react";
import './index.css';
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ClickCounter from "./components/ClickCounter";
import TicTacToe from "./components/TicTacToe";
import Calculator from "./components/Calculator";
import CepSearch from "./components/CepSearch";

function App() {
  const [page, setPage] = useState("To-Do List");

  const renderPage = () => {
    switch (page) {
      case "To-Do List": return <ToDoList />;
      case "Contador de Cliques": return <ClickCounter />;
      case "Jogo da Velha": return <TicTacToe />;
      case "Calculadora": return <Calculator />;
      case "Buscador de CEP": return <CepSearch />;
      default: return <ToDoList />;
    }
  };

  return (
    <div className="min-h-screen bg-[#2b2b2b] text-white">
      <Header setPage={setPage} />
      <main className="flex-grow flex items-center justify-center p-6">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
