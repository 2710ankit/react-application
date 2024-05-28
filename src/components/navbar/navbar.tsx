import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { broadcastChannel } from "../home/Home";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    broadcastChannel.postMessage("logout");
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Logo</a>
      </div>
      <ul className="navbar-links"></ul>
      <div className="navbar-user">
        <span className="username">Username</span>
        <a className="login-logout" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
