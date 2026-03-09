import React, { useState } from 'react';
// removed local import

const Feature2: React.FC = () => {
  const [task, setTask] = useState<Task>({
    id: 0,
    title: '',
    description: '',
    priority: '',
    completed: false,
  });

  const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, priority: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(task);
  };

  return (
    <div className="card">
      <h2>Definir Prioridade</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Prioridade:
          <input type="text" value={task.priority} onChange={handlePriorityChange} />
        </label>
        <button type="submit">Definir</button>
      </form>
    </div>
  );
};

export default Feature2;