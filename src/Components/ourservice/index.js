import React from "react";
import "./service.css";
import Serviceimg from "../../assets/images/services-page/banner.jpg";

const Home = () => {
  return (
    <section class="ourservice">
      <div className="slide">
        <img src={Serviceimg} alt=".." />
        <div className="overlay">
          <p>
            Expert Legal and Business Consulting with 14 Years of Global
            Experience
          </p>
        </div>
        <div className="btn">
          <button className="servicebtn">EXPLORE OUR SERVICE</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
