import axios from "axios";
import { error } from "console";

const axiosInterceptorInstance = axios.create({
  baseURL: "http://localhost:3001/api", // Replace with your API base URL
});

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    // const accessToken = JSON.parse(localStorage.getItem("token"));

    // If token is present, add it to request's Authorization Header
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      if (config.headers) config.headers.authorization = accessToken;
    }

    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here
    const token = response.headers["authorization"];
    if (token) localStorage.setItem("token", token);

    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;

export const handleAuthorizationError = (error: any, navigate: any) => {
  if ([401, 402, 403].includes(error.response.status)) {
    window.localStorage.clear();
    localStorage.clear()
    document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    navigate("/login");
  }
};
