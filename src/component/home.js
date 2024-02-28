import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import Whatwedo from "../pages/WhatweDO";
import Ourexpertise from "../pages/ourexpertise";
import Testimonial from "../pages/testimonals";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Whatwedo />
      <Ourexpertise />
      <Testimonial />
    </>
  );
};

export default App;
