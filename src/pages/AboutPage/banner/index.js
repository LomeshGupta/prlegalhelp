import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <section className="bannersection">
      <div className="banner">
        <div className="overlay">
          <h1>About Us</h1>
          <div className="labels">
            <span onClick={handleClick}>Home</span>
            {">"}
            <span>About</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
