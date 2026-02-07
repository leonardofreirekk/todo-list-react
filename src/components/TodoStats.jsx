function TodoStats({ tarefas }) {
  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <p className="todo-stats">
      Total: {total} | Concluídas: {concluidas}
    </p>
  );
}

export default TodoStats;
