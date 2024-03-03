// SlideshowBanner.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './SlideshowBanner.css';
import Home1 from "../../../assets/home1.png";
import Home2 from "../../../assets/home2.png";

const SlideshowBanner = () => {
  const slides = [
    {
      imageUrl: Home1,
      title: "Solving your <br />problems head-on",
      subtitle:
        "We provide you with direct and expert legal care <br />so that you can resolve issues early and amicably.",
      buttonText: "Explore Now",
    },
    {
      imageUrl: Home2,
      title: "Directly addressing <br />your legal matter.",
      subtitle:
        "Expert legal guidance for issue resolution ensuring<br/>your peace of mind through strategic problem-solving.",
      buttonText: "Get Started",
    },
    {
      imageUrl: Home1,
      title: "Confronting legal <br/>issues with precision.",
      subtitle:
        "Legal expertise for resolutions that prioritize <br/>your interests and foster amicable outcomes effectively.",
      buttonText: "Get Started",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slideshow-banner">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
            <div className="overlay1">
              <p dangerouslySetInnerHTML={{ __html: slide.title }}></p>
            </div>
            <div className="overlay2">
              <p dangerouslySetInnerHTML={{ __html: slide.subtitle }}></p>
            </div>
            <div className="btn">
              <a className="servicebtn">{slide.buttonText}</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideshowBanner;
