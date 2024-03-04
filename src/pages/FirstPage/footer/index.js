// Footer.js

import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footersection">
      <h1>About Our Firm</h1>
      <div className="footer">
        <div className="footer-section">
          <div className="company-info">
            <h4>PR LEGAL HELP</h4>
          </div>
          <div className="company-info">
            <h3>Follow Us</h3>
          </div>
          <div className="social-media">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <div className="contact-details">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="footer-section">
          <div className="office-hours">
            <h3>Office Hours</h3>
            <p>Mon-Fri: 9 AM - 5 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
