import React, { useState } from 'react';


function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [error, setError] = useState('');

  const handleTaskTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskTitle.trim() === '') {
      setError('Task name cannot be empty.');
      return;
    }

    const newTask = {
      title: taskTitle,
      id: Date.now(),
    };

    onAddTask(newTask);

    // Clear input and error message
    setTaskTitle('');
    setError('');
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task details"
          value={taskTitle}
          onChange={handleTaskTitleChange}
        />
        <button type="submit">Add Task</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default TaskForm;
