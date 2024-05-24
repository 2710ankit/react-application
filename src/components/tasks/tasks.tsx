import React from "react";
import './tasks.css'

const Tasks = () => {
  console.log(1);
  return (
    <div className="task-manager-container">
      <h2>Task Manager</h2>
      <div className="filter-form">
        <input type="text" id="search" placeholder="Search tasks..." />
        <button>Search</button>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Date</th>
            <th>Made By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task 1</td>
            <td>2024-05-25</td>
            <td>User 1</td>
            <td>
              <button>Mark Complete</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
