import React from "react";
import "./about.css";
import Img1 from "../../../assets/sideimage.png";
import Img2 from "../../../assets/sideimage2.png";

const About = () => {
  return (
    <section className="about">
      <div className="section-with-images">
        <div className="left-image">
          <img src={Img1} alt="Left" />
        </div>

        <div className="center-content">
          <h2>Centered Text</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            nisi eu mauris tincidunt dignissim.
          </p>
        </div>

        <div className="right-image">
          <img src={Img2} alt="Right" />
        </div>
      </div>
    </section>
  );
};

export default About;
