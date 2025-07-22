import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { useEffect } from "react";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("token");
    if (isAuthenticated) {
      return navigate("/dashboard");
    } else {
      return navigate("/login");
    }
  }, [navigate]);
};
