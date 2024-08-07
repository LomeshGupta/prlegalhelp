import React from "react";
import "./service.css";
import Serviceimg from "../../assets/images/services-page/banner.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section class="ourservice">
      <div className="slide">
        <img src={Serviceimg} alt=".." />
        <div className="overlay">
          <p>
            Strategic Legal and Business Consulting with a Global Perspective
            and Proven Expertise
          </p>
        </div>
        <div className="btn">
          <Link to="/our-expertise">
            <button className="servicebtn">EXPLORE OUR SERVICE</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
