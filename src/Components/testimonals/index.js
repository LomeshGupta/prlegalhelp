import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testi";
import "./testimonial.css";

const TestimonialSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const testimonials = [
    {
      name: "Shivanki Verma",
      // position: "CEO, Company A",
      comment:
        "BEST Legal team i have ever came across, Bunch of smart lawyers witty and sharp. Advise and action on case good, Good to see young lawyers with ethics.",
    },
    {
      name: "Jai Shree",
      // position: "CEO, Company A",
      comment:
        "Poonam mam and Raju sir were handled my case in saket court very nicely. I have known her since 2017. She is doing excellent work.",
    },
    {
      name: "Khyam Prasad Sapkota",
      // position: "CEO, Company A",
      comment:
        "I am working in Punjab police. Poonam mam is helping me in my service matter in Chandigarh HC. Very good lawyer. Highly recommended.",
    },
    {
      name: "Megha Vidyarthi",
      // position: "CEO, Company A",
      comment:
        "Working in this firm had been a roller coaster journey for me, i did my internship with the best of best team! You can contact for any legal help or internship experience.",
    },
    {
      name: "Bhaskar Mukherjee",
      // position: "CEO, Company A",
      comment:
        "Poonam Rimal adv is doing very good work in different courts in delhi and Ncr and gives her best in all matters she undertakes.",
    },
    {
      name: "Rishika",
      // position: "CEO, Company A",
      comment:
        "Legal Help is Highly Recommended from my side as I have experienced with the team which is so much co-operative.All thé advocates and interns are excellent",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (5 seconds)
  };

  return (
    <div className="testimonial-section" id="testi">
      <div className="head">
        <h1>Client Testimonials</h1>
        <span role="img" aria-label="star">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</span>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="cont">
            <Testimonial {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
