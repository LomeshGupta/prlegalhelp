import React from "react";
import Home1 from "../../assets/home1.png";
import Home2 from "../../assets/home1mobile.png";
import "./home.css";

const Home = () => {
  return (
    <section class="section1">
      <div>
        <div class="imgdiv">
          <img src={Home1} width="100%" alt="..." />
        </div>
        <div class="imgdiv1">
          <img src={Home2} width="100%" alt="..." />
        </div>
        <div className="heading">
          Solving your <br></br>problems head-on
        </div>
        <div className="heading2">
          We provide you with direct and expert legal care<br></br>so that you
          can resolve issues early and amicably.
        </div>
        <div className="btn">
          <a className="servicebtn" href="#" rel="noreferrer">
            see services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
