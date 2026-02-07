import TodoItem from "./TodoItem";

function TodoList({ tarefas, alternarConclusao, editarTarefa, removerTarefa }) {
  if (tarefas.length === 0) {
    return <p>Nenhuma tarefa ainda!</p>;
  }

  return (
    <div className="todo-list">
      {tarefas.map((tarefa) => (
        <TodoItem
          key={tarefa.id}
          tarefa={tarefa}
          alternarConclusao={alternarConclusao}
          editarTarefa={editarTarefa}
          removerTarefa={removerTarefa}
        />
      ))}
    </div>
  );
}

export default TodoList;
