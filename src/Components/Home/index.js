import React, { useState } from 'react';
import "./home.css";
import Slideshow from "./slideshow";
import DisclaimerPopup from '../Disclaimer';
import { Typography } from '@mui/material';

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setShowPopup(false);
    setAgreed(true);
    // You can add further actions upon agreement here
  };

  const handleDisagree = () => {
    setShowPopup(false);
    window.location.href = 'https://www.google.com'; // Redirect to Google
  };

  return (
    <section class="homesection" id="home">
      <DisclaimerPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        onAgree={handleAgree}
        onDisagree={handleDisagree}
      />
      <Slideshow />
    </section>
  );
};

export default Home;
