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
          <div className="head1">We know divorce is tough.</div>
          <div className="head2">
            We work closely with our clients throughout every stage of what is
            usually a long and tough ordeal so that they can accomplish their
            goals and desires. With our combined experience of handling complex
            trials and litigations for over 30 years, you can trust us to be
            forthright and diligent in meeting your needs.
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
