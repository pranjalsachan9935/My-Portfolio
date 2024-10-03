import React, { useState, Suspense, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink, Link
} from "react-router-dom";
import instagramLogo from "./assets/instagram.png";
import linkedinLogo from "./assets/linkdin.png";
import githubLogo from "./assets/github.png";
import menuIcon from "./assets/menu.png";
import homeIcon from './assets/3d-house.png';
import contactUsPng from './assets/information-channels.png';
import aboutUsPng from './assets/about.png';
import projectPng from './assets/rocket.png';
import "./App.css";


// Lazy loading pages
const Home = React.lazy(() => import("./page/Home"));
const About = React.lazy(() => import("./page/Aboutus"));
const Project = React.lazy(() => import("./page/Myproject"));
const Contact = React.lazy(() => import("./page/Contactus"));

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  // Toggle the menu when the icon is clicked
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Close the menu if clicking outside of the menu or menu icon
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&//for nav bar
      menuIconRef.current &&//for icon 
      !menuRef.current.contains(event.target) && // If clicked outside the menu
      !menuIconRef.current.contains(event.target) // And outside the menu icon
    ) {
      setMenuOpen(false); // Close the menu
    }
  };

  return (
    <div onClick={handleClickOutside} style={{ minHeight: "100vh" }}>
      <Router>
        <nav style={{padding:0}} className={`navbar ${menuOpen ? "open" : ""}`} ref={menuRef}>

          {/* Menu Icon */}
          <div ref={menuIconRef} className="menu-icon" onClick={toggleMenu}>
            <img src={menuIcon} alt="Menu Icon" />
          </div>

         

          {/* Navigation Links */}
          <ul>
            <li>
              <NavLink to="/" end  onClick={() => setMenuOpen(false)}>
              <img src={homeIcon} alt="homeIcon" className="nav-icon"></img> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/Aboutus" className={({isActive})=>(isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
              <img src={aboutUsPng} alt="About Us" className="nav-icon" /> ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/Myproject" className={({isActive})=>(isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
              <img src={projectPng} alt="Projects" className="nav-icon" /> PROJECT
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contactus"  className={({isActive})=>(isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
              <img src={contactUsPng} alt="Contact Us" className="nav-icon" /> CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://www.instagram.com/pranjal_sachan2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranjal-sachan-a09549251"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn Logo" />
          </a>
        </div>

        <div className="social-icons-1">
          <a
            href="https://github.com/pranjalsachan9935"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub Logo" className="git-image" />
          </a>
        </div>

        {/* Routes */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<About />} />
            <Route path="/Contactus" element={<Contact />} />
            <Route path="/Myproject" element={<Project />} />
          </Routes>
        </Suspense>
      </Router>
    
    </div>
  );
};

export default App;

