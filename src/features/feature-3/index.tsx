import React, { useState } from 'react';
// removed local import

const Feature3: React.FC = () => {
  const [task, setTask] = useState<Task>({
    id: 0,
    title: '',
    description: '',
    priority: '',
    completed: false,
  });

  const handleCompletedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, completed: event.target.checked });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(task);
  };

  return (
    <div className="card">
      <h2>Marcar como Concluída</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Concluída:
          <input type="checkbox" checked={task.completed} onChange={handleCompletedChange} />
        </label>
        <button type="submit">Marcar</button>
      </form>
    </div>
  );
};

export default Feature3;