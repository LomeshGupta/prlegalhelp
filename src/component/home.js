import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import Whatwedo from "../pages/WhatweDO";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Whatwedo />
    </>
  );
};

export default App;
