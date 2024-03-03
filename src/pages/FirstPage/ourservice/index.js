import React from "react";
import "./service.css";
import Serviceimg from "../../../assets/ourservice.png";

const Home = () => {
  return (
    <section class="ourservice">
      <div className="slide">
        <img src={Serviceimg} alt=".." />
        <div className="overlay">
          <p>
            We provide you with direct and expert legal care so that you can
            resolve issues early and amicably.
          </p>
        </div>
        <div className="btn">
          <a className="servicebtn">SEE SERVICE</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
