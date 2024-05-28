import React, { useEffect, useState } from "react";
import "./tasks.css";
import axiosInterceptorInstance, { handleAuthorizationError } from "../../interceptors/http.interceptor";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const res = await axiosInterceptorInstance.get("/tasks");
        setTasks(res.data.data);
      } catch (error: any) {
        handleAuthorizationError(error,navigate)
      }
    };

    fetchAsync();
  }, []);

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
            <th>Craeted At</th>
            <th>Made By</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: any) => {
            return (
              <tr key={task.id}>
                <td>{task.task}</td>
                <td>{new Date(task.createdAt).toLocaleDateString()}</td>
                <td>{task.userId}</td>
                <td>{task.status ? "true" : "false"} </td>
                <td>
                  <button>Mark Complete</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
