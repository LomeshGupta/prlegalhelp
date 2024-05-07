import React, { useState, useEffect } from 'react';
import "./home.css";
import Slideshow from "./slideshow";
import DisclaimerPopup from '../Disclaimer';
import { Typography } from '@mui/material';

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    // Check if user has previously agreed to the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    if (hasAgreed) {
      setShowPopup(false); // If agreed, don't show the popup
      setAgreed(true);
    }
    
    // Listen for beforeunload event
    const handleBeforeUnload = () => {
      localStorage.removeItem('disclaimerAgreed');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleAgree = () => {
    setShowPopup(false);
    setAgreed(true);
    localStorage.setItem('disclaimerAgreed', 'true');
  };

  const handleDisagree = () => {
    setShowPopup(false);
    window.location.href = 'https://www.google.com'; // Redirect to Google
  };

  return (
    <section className="homesection" id="home">
      {!agreed && (
        <DisclaimerPopup
          open={showPopup}
          onClose={() => setShowPopup(false)}
          onAgree={handleAgree}
          onDisagree={handleDisagree}
        />
      )}
      <Slideshow />
    </section>
  );
};

export default Home;
