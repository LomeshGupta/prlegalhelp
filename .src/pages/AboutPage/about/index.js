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
          <h2>Who we are?</h2>
          <p>
            With a rich legacy spanning over a decade, PR Legal Help stands as a
            stalwart in providing unparalleled legal solutions. Our commitment
            to excellence is evident in our extensive track record, boasting
            over 10 years of experience in delivering legal services with utmost
            precision. At PR Legal Help, we understand that each client comes
            with unique needs and concerns. Therefore, our approach is rooted in
            the principle of personalized attention and unwavering support. We
            prioritize building strong client relationships, ensuring that every
            individual receives the guidance and legal assistance they deserve.
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
