import { Navigate } from "react-router-dom";

export const AuthWrapper = ({ children }: { children: any }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  } else {
    return <Navigate to="login" />;
  }
};

export const LoginWrapper = ({ children }: { children: any }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return children;
  } else {
    return <Navigate to="/tasks" />;
  }
};
