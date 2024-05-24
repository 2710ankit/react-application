import React from "react";

import './createTask.css'
const CreateTask = () => {
  return (
    <div className="create-task-container">
      <h2>Create Task</h2>
      <form id="create-task-form">
        <div className="form-group">
          <label>Task Name</label>
          <input type="text" id="task-name" name="task-name" required />
        </div>
        <div className="form-group">
          <label>Task Image</label>
          <input
            type="file"
            id="task-image"
            name="task-image"
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
