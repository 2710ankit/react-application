import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { AuthWrapper, LoginWrapper } from "./gaurds/auth.gaurd";
// import { AuthWrapper } from "./gaurds/auth.gaurd";

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
            <Route
              path="login"
              element={
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
              }
            ></Route>
            <Route
              path="/"
              element={
                <AuthWrapper>
                  <Home />
                </AuthWrapper>
              }
            >
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
