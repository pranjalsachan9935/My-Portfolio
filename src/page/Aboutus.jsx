import React from 'react';
import './about.css';
import profileImage from './pranjal.png';


function About() {
  console.log('about is rendered');//like this



  return (
    <div className='outer-container'>
      <div className='left-section'>
      <img src={profileImage} alt="Pranjal Sachan" className="profile-image" /> 
      </div>
      
      <div className='right-section'>
        <h1 className='about-us'>About Me</h1>
        <p className="title">Software <span class="zoom-text">
  <span>E</span>
  <span>n</span>
  <span>g</span>
  <span>i</span>
  <span>n</span>
  <span>e</span>
  <span>e</span>
  <span>r</span>
  <span>i</span>
  <span>n</span>
  <span>g</span>
</span> Student</p>
        <p className='bio-text'>I am a B.Tech Software Engineering student with a passion for technology and coding.
        I am a dedicated software engineering student who loves exploring new technologies and building applications that make a difference. My interests include web development, programming languages, and emerging tech trends.</p>
      </div>
    </div>
  );
}

export default About;
