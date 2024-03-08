import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logobg from "../../../assets/logobg.png";
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import "./nav.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const pageScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="container">
        <NavLink to="/">
          <div className="logo">
            <img src={logobg} width="70px" alt=".." />
            <p>PR Legal Help</p>
          </div>
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <div className="menu-icon" onClick={handleShowNavbar}>
                <IoClose />
              </div>
            </li>
            <li className="nav__item">
              <NavLink to="/" onClick={pageScroll} className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/About" onClick={pageScroll} className="nav__link">
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about-us" rel="noreferrer" className="nav__link">
                Blogs
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/favorite" rel="noreferrer" className="nav__link">
                Favorite
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/location" rel="noreferrer" className="nav__link">
                Location
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/get-started"
                rel="noreferrer"
                className="nav__link nav__cta"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
