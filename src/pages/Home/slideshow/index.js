import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.css";
import Home1 from "../../../assets/home1.png";
import Home2 from "../../../assets/home2.png";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    {
      url: Home1,
      h1: "Solving your",
      h2: "problems head-on",
      h3: "We provide you with direct and expert legal care",
      h4: "so that you can resolve issues early and amicably.",
    },
    {
      url: Home2,
      h1: "Directly addressing",
      h2: "your legal matter.",
      h3: "Expert legal guidance for issue resolution ensuring",
      h4: "your peace of mind through strategic problem-solving.",
    },
    {
      url: Home1,
      h1: "Confronting legal",
      h2: "issues with precision.",
      h3: "Legal expertise for resolutions that prioritize",
      h4: "your interests and foster amicable outcomes effectively.",
    },
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl.url} width="100%" alt={`Slide ${index + 1}`} />
            <div className="heading">
              {imageUrl.h1}
              <br></br>
              {imageUrl.h2}
            </div>
            <div className="heading2">
              {imageUrl.h3}
              <br></br>
              {imageUrl.h4}
            </div>
            <div className="btn">
              <a className="servicebtn" href="#" rel="noreferrer">
                see services
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
