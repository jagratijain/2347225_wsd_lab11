import React, { useState } from 'react';

const TaskEditForm = ({ task, onSave, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleSave = () => {
    
    onSave({ ...task, title: editedTitle });
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form>
        <input
          type="text"
          value={editedTitle}
          onChange={handleTitleChange}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskEditForm;
