import { lazy, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Navbar = lazy(() => import("../navbar/navbar"));

const Home = () => {
  console.log("home");

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
