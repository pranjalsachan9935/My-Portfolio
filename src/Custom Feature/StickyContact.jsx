import React from "react";
import instagramLogo from "../assets/instagram-fill-svgrepo-com.svg";
import linkedinLogo from "../assets/linkedin-svgrepo-com.svg";
import githubLogo from "../assets/github-svgrepo-com.svg";
import './StickyContact.css';

const StickyContact = () => {
  return (
    <div className="_social-links">
      <ul className="_links-list">
        <li className="_social-link">
          <a
            href="https://www.instagram.com/pranjal_sachan2021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="WhatsApp" className="sticky-logo" />
          </a>
        </li>
        <li className="_social-link">
          <a
            href="https://github.com/pranjalsachan9935"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" className="sticky-logo"/>
          </a>
        </li>
        <li className="_social-link">
          <a
            href="https://www.linkedin.com/in/pranjal-sachan-a09549251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="sticky-logo" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StickyContact;
