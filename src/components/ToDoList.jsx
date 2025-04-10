import React, { useState } from "react";

function ToDoList() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeCompletedTasks = () => {
    const filteredTasks = tasks.filter((task) => !task.completed);
    setTasks(filteredTasks);
  };

  return (
    <div className="min-h-screen bg-[#2b2b2b] text-white p-6">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>

      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded mr-2"
        />
        <button onClick={addTask} className="bg-red-600 text-white px-3 py-2 rounded mr-2">
          Adicionar
        </button>
        <button onClick={removeCompletedTasks} className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded">
          Remover Tarefas Concluídas
        </button>
      </div>

      <ul className="pl-0">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="mr-2"
            />
            <span className={task.completed ? "line-through text-gray-400" : ""}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
