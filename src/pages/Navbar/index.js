import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import "./nav.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
          PR Legal Help
        </div>
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
              <NavLink to="/" rel="noreferrer" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/news" rel="noreferrer" className="nav__link">
                News
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about-us" rel="noreferrer" className="nav__link">
                About Us
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
