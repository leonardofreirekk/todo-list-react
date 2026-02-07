import { useState } from "react";

function TodoForm({ adicionarTarefa }) {
  const [entrada, setEntrada] = useState("");

  function lidarComEnvio(e) {
    e.preventDefault();
    if (!entrada.trim()) return;

    adicionarTarefa(entrada.trim());
    setEntrada("");
  }

  return (
    <form onSubmit={lidarComEnvio} className="todo-form">
      <input
        type="text"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="Adicionar nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
