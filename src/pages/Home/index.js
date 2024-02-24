import React from "react";
import Home1 from "../../assets/home1.png";
import Home2 from "../../assets/home1mobile.png";
import "./home.css";
import Slideshow from "./slideshow";

const Home = () => {
  return (
    <section class="section1">
      <div>
        <div class="imgdiv">
          <Slideshow />
        </div>
        <div class="imgdiv1">
          <img src={Home2} width="100%" alt="..." />
        </div>
      </div>
    </section>
  );
};

export default Home;
