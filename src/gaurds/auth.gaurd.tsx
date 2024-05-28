import { Navigate } from "react-router-dom";

export const AuthWrapper = ({ children }: { children: any }) => {
  const token = getCookie("token");

  if (token) {
    return children;
  } else {
    return <Navigate to="login" />;
  }
};

export const LoginWrapper = ({ children }: { children: any }) => {
  const token = getCookie("token");

  if (!token) {
    return children;
  } else {
    return <Navigate to="/tasks" />;
  }
};

const getCookie = (cname: string) => {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
