import { lazy, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = lazy(() => import("../navbar/navbar"));
export const broadcastChannel = new BroadcastChannel("logout");

const Home = () => {
  const navigate = useNavigate();
  broadcastChannel.onmessage = (message: MessageEvent) => {
    if (message.data === "logout") {
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
