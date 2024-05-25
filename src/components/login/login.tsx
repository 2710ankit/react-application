import { useState } from "react";

import axiosInterceptorInstance from "../../interceptors/http.interceptor";
import "./login.css";
const Login = () => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleInputChange = ({ name, value }: any) => {
    setLoginForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleLogin = (event: any) => {
    event.preventDefault();
    const { username, password } = loginForm;

    console.log(1);
    axiosInterceptorInstance
      .post("/user/login", { username, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.response.data.message.message);
      });
  };
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) => handleInputChange(e.target)}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => handleInputChange(e.target)}
          />
        </div>
        <button className="login-button" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
