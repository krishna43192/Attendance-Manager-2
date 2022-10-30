import {Routes,Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard"
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

function App() {
  return (
    <>
      {/* <h1>Home</h1> */}
      <Toaster position="top-center"/>
      <Routes>
        <Route
          path = "/"
          element = {
            <Home/>
          }
        />
        <Route
          path = "/dashboard"
          element = {
            <Dashboard/>
          }
        />
        <Route
          path = "/student"
          element = {
            <StudentDashboard/>
          }
        />
        <Route
          path = "/teacher"
          element = {
            <TeacherDashboard/>
          }
        />
        <Route
          path = "/admin"
          element = {
            <AdminDashboard/>
          }
        />
        <Route
          path = "/info"
          element = {
            <div>Info</div>
          }
        />
        <Route
          path = "/login"
          element = {
            <Login/>
          }
        />
        <Route
          path = "/register"
          element = {
            <Register/>
          }
        />
      </Routes>
    </>
  );
}

export default App;