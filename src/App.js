import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
// import News from "./pages/News";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
