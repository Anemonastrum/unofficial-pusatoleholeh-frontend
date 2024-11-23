import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="min-h-screen bg-base-100">
      <Router>
        <Routes>

          <Route path="/*" element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
