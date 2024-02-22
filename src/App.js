import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
// import News from "./pages/News";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <main className="main-content">
        <Routes>{/* Define other routes that you need*/}</Routes>
      </main>
    </Router>
  );
};

export default App;
