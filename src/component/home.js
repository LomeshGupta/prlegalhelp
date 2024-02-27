import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import Whatwedo from "../pages/WhatweDO";
import Ourexpertise from "../pages/ourexpertise";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Whatwedo />
      <Ourexpertise />
    </>
  );
};

export default App;
