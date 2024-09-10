import React, { useState, Suspense, useEffect, useRef } from "react";
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
import homeIcon from './assets/home.png';
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
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        menuIconRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuIconRef.current.contains(event.target)
      ) {
        setMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <nav className={`navbar ${menuOpen ? "open" : ""}`} ref={menuRef}>

        <div ref={menuIconRef} className="menu-icon" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" />
        </div>

       <Link to="/">
       <img src={homeIcon} alt="homeIcon" className="home-icon"></img>
       </Link>
          
        
        
        <ul>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aboutus" onClick={() => setMenuOpen(false)}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/Myproject" onClick={() => setMenuOpen(false)}>
              PROJECT
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contactus" onClick={() => setMenuOpen(false)}>
              CONTACT
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

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/Contactus" element={<Contact />} />
          <Route path="/Myproject" element={<Project />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
