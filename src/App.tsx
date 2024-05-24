import React, { Suspense, lazy } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

const Login = lazy(() => import("./components/login/login"));
const Home = lazy(() => import("./components/home/Home"));
const Tasks = lazy(() => import("./components/tasks/tasks"));
const CreateTask = lazy(() => import("./components/create-task/CreateTask"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="login" element={<Login />}></Route>
            <Route path="/" element={<Home />}>
              <Route path="tasks" element={<Tasks />}></Route>
              <Route path="create" element={<CreateTask />}></Route>
            </Route>
            <Route path="*" element={<div> NOT FOUND</div>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
