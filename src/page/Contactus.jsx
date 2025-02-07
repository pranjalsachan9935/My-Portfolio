import React from "react";
import "./contact.css";
import instagramLogo from "../assets/instagram-fill-svgrepo-com.svg";
import linkedinLogo from "../assets/linkedin-svgrepo-com.svg";
import githubLogo from "../assets/github-svgrepo-com.svg";
import gmailLogo from "../assets/gmail-svgrepo-com.svg";
const Contactus = () => {
  return (
    <div className="contact-background">
      <div className="contact-container">
        <h2 className="contact-header">Let's Connect</h2>
        <div className="contact-list">
          <a
            href="https://www.instagram.com/pranjal_sachan2021/"
            className="contact-item instagram"
          >
            <img src={instagramLogo} alt="WhatsApp" className="contact-icon" />
            <div className="contact-info">
              <span className="contact-platform">Instagram</span>
            </div>
          </a>
          <hr />
          <a
            href="mailto:pranjalsachan9935@gmail.com"
            className="contact-item whatsapp"
          >
            <img src={gmailLogo} alt="WhatsApp" className="contact-icon" />
            <div className="contact-info">
              <span className="contact-platform">Email</span>
            </div>
          </a>
          <hr />
          <a
            href="https://www.linkedin.com/in/pranjal-sachan-a09549251/"
            className="contact-item linkedin"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="contact-icon" />
            <div className="contact-info">
              <span className="contact-platform">LinkedIn</span>
            </div>
          </a>
          <hr />
          <a
            href="https://github.com/pranjalsachan9935"
            className="contact-item github"
          >
            <img src={githubLogo} alt="GitHub" className="contact-icon" />
            <div className="contact-info">
              <span className="contact-platform">GitHub</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
