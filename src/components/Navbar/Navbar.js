import React from "react";
import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const scrollToHome = () => {
    scroller.scrollTo("home", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToService = () => {
    scroller.scrollTo("service", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-navbar">
          <div className="logo-container">
            <h1><span>F</span>ady</h1>
          </div>
        </div>

        <div className="links-container">
          <ul className="links-navbar">
            <li>
              <NavLink to="/" className="link-nav" onClick={scrollToHome}>
                <i className="fas fa-home"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="link-nav" onClick={scrollToAbout}>
                <i class="fas fa-address-card"></i> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="link-nav" onClick={scrollToService}>
                <i class="fas fa-network-wired"></i> Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="link-nav">
                <i class="fab fa-empire"></i> Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="link-nav" onClick={scrollToContact}>
                <i class="fas fa-handshake"></i> Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <footer className="footer-navbar">
          <div className="footer-container">
              <div className="footer-pic">
                <div className="footer-pic-real"></div>
              </div>
              <div className="right-side">
                <h5>Fady</h5>
                <a href="https://www.facebook.com/FadyMounirSamy" className="footer-link">example@gmail.com</a>
              </div>
          </div>
        </footer>
      </nav>
    </>
  );
};

export default Navbar;
