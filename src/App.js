// App.js
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Attorney from "./Pages/Attorneys";
import Contact from "./Pages/Contactus";
import Expertise from "./Pages/Expertise";


const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/attorneys" element={<Attorney />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/our-expertise" element={<Expertise />} />
          </Routes>
        </Suspense>

        {/* <Route path="/about" component={AboutUs} />
          <Route path="/professionals" component={Professionals} />
          <Route path="/services" component={Services} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={ContactUs} /> */}
      </div>
    </Router>
  );
};

export default App;
