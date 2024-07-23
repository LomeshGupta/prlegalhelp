// SlideshowBanner.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './SlideshowBanner.css';
import { Link } from "react-router-dom";
import home1 from "../../assets/images/banner/bann1.jpg";
import home2 from "../../assets/images/banner/bann2.jpg";
import home3 from "../../assets/images/banner/bann3.jpg";

const SlideshowBanner = () => {
  const slides = [
    {
      imageUrl: home1,
      title: "Solving your <br />problems head-on",
      subtitle:
        "We provide you with direct and expert legal care <br />so that you can resolve issues early and amicably.",
      buttonText: "Explore Now",
    },
    {
      imageUrl: home2,
      title: "Directly addressing <br />your legal matter.",
      subtitle:
        "Expert legal guidance for issue resolution ensuring<br/>your peace of mind through strategic problem-solving.",
      buttonText: "Get Started",
    },
    {
      imageUrl: home3,
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
              <Link to={slide.link} className="servicebtn">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideshowBanner;
