import React from "react";
import Home2 from "../../assets/home1mobile.png";
import "./whatwedo.css";
import Slideshow from "../Home/slideshow";
import Img1 from "../../assets/getintouch.jpg";

const Home = () => {
  return (
    <section class="section2">
      <div className="containerw">
        <div className="cont">
          <div className="head1">Putting Justice First</div>
          <div className="head2">
            Putting Justice First encapsulates our unwavering commitment. Guided
            by unwavering integrity and legal expertise, we relentlessly pursue
            fairness. Our clients receive personalized support, ensuring each
            case is approached with diligence, dedication, and the pursuit of
            legal excellence, solidifying our standing as champions for justice
            and client satisfaction.
          </div>
          <div className="getin">
            <a className="servicebtn" href="#" rel="noreferrer">
              get in touch
            </a>
          </div>
        </div>
        <div className="img1">
          <img src={Img1} width="100%" />
        </div>
      </div>
    </section>
  );
};

export default Home;
