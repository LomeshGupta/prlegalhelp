import React from "react";

import Navbar from "../pages/FirstPage/Navbar";
import Home from "../pages/FirstPage/Home";
import Whatwedo from "../pages/FirstPage/WhatweDO";
import Ourexpertise from "../pages/FirstPage/ourexpertise";
import Testimonial from "../pages/FirstPage/testimonals";
import Ourservice from "../pages/FirstPage/ourservice";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Whatwedo />
      <Ourexpertise />
      <Ourservice />
      <Testimonial />
    </>
  );
};

export default App;
