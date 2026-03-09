import React, { useState } from 'react';
// removed local import

const Feature1: React.FC = () => {
  const [task, setTask] = useState<Task>({
    id: 0,
    title: '',
    description: '',
    priority: '',
    completed: false,
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, title: event.target.value });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, description: event.target.value });
  };

  const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, priority: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(task);
  };

  return (
    <div className="card">
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={task.title} onChange={handleTitleChange} />
        </label>
        <label>
          Descrição:
          <input type="text" value={task.description} onChange={handleDescriptionChange} />
        </label>
        <label>
          Prioridade:
          <input type="text" value={task.priority} onChange={handlePriorityChange} />
        </label>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default Feature1;