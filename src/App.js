import { useState } from "react";
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
    <div>
      <Header setPage={setPage} />
      <main className="p-6">{renderPage()}</main>
    </div>
  );
}

export default App;

