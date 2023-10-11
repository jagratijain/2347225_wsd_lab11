/* App.js */
import React, { useState } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskEditForm from './Components/TaskEditForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    // Add more tasks here
  ]);

  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const handleSaveEdit = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Task Management App</h1>
      <TaskForm onAddTask={handleAddTask} />
      {editingTask ? (
        <TaskEditForm task={editingTask} onSave={handleSaveEdit} onCancel={() => setEditingTask(null)} />
      ) : null}
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
