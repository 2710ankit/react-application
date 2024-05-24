import React from "react";

import './login.css'
const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label>Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
