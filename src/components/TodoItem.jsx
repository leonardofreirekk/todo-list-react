import { useState } from "react";

function TodoItem({ tarefa, alternarConclusao, editarTarefa, removerTarefa }) {
  const [editando, setEditando] = useState(false);
  const [textoEditado, setTextoEditado] = useState(tarefa.texto);

  function salvarEdicao() {
    if (!textoEditado.trim()) return;
    editarTarefa(tarefa.id, textoEditado.trim());
    setEditando(false);
  }

  return (
    <div className={`todo-item ${tarefa.concluida ? "completed" : ""}`}>
      {editando ? (
        <>
          <input
            value={textoEditado}
            onChange={(e) => setTextoEditado(e.target.value)}
            onBlur={salvarEdicao}
            onKeyDown={(e) => e.key === "Enter" && salvarEdicao()}
            autoFocus
          />
        </>
      ) : (
        <span onClick={() => alternarConclusao(tarefa.id)}>{tarefa.texto}</span>
      )}

      <div className="acoes">
        <button onClick={() => setEditando(!editando)}>✏️</button>
        <button onClick={() => removerTarefa(tarefa.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default TodoItem;
