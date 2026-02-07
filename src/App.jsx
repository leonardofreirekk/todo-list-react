import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    return JSON.parse(localStorage.getItem("tarefas")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa(texto) {
    setTarefas([...tarefas, { id: Date.now(), texto, concluida: false }]);
  }

  function alternarConclusao(id) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)),
    );
  }

  function editarTarefa(id, novoTexto) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, texto: novoTexto } : t)),
    );
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  function marcarTodas(concluida) {
    setTarefas(tarefas.map((t) => ({ ...t, concluida })));
  }

  function removerTodas() {
    setTarefas([]);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <TodoForm adicionarTarefa={adicionarTarefa} />

      <TodoStats tarefas={tarefas} />

      <div className="acoes-globais">
        <button onClick={() => marcarTodas(true)}>Concluir todas</button>
        <button onClick={() => marcarTodas(false)}>Desmarcar todas</button>
        <button onClick={removerTodas}>Excluir todas</button>
      </div>

      <TodoList
        tarefas={tarefas}
        alternarConclusao={alternarConclusao}
        editarTarefa={editarTarefa}
        removerTarefa={removerTarefa}
      />
    </div>
  );
}

export default App;
