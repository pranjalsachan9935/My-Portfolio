import React from "react";
import "./Home.css";
import pdfFile from "./projectself.pdf";
import catImage from "./cat.jpg";
import profileImage from "./pranjal.png";

const Home = () => {
  const downloadPDF = () => {
    const link = document.createElement("a"); //This line creates a new HTML anchor element (<a>) dynamically using JavaScript.

    link.href = pdfFile; //pdfFile is a variable that contains the path to the PDF file you want to download.

    link.download = "projectself.pdf"; //The download attribute specifies that the target will be downloaded when the link is clicked.

    document.body.appendChild(link);
    link.click(); //This line adds the newly created link element to the document body.

    link.click();

    document.body.removeChild(link); //This line removes the link element from the document after it has been clicked and the download has been triggered.
  };

  return (
    <>
      <div className="home-container">
        <img src={catImage} alt="Pranjal Sachan" className="image1" />

        <div className="text-overlay-bottom">
          <h1 className="about-me-heading">
            <span className="let-me">Let Me </span>
            <span className="introduce">Introduce </span>
            <span className="myself">Myself</span>
          </h1>

          <div className="outer-container">
            <div className="left-box">
              <p className="about-me-p">
                <div>
                  I discovered my passion for <span className="highlight-text">programming </span>and continue to grow
                  with each new challenge.
                </div>
                <div className="about-me-lines">
                  I'm proficient in modern technologies like 
                  <span className="highlight-text">JavaScript,
                  React.js and Next.js</span>
                  
                   while also having a solid foundation in
                  C++ and Go.
                </div>
                <div className="about-me-lines">
                  My primary interests lie in crafting <span className="highlight-text">dynamic, user-friendly </span>
                  web applications, exploring new frontend technologies, and
                  diving into blockchain development.
                </div>
                <div className="about-me-lines">
                  I love to push the boundaries of <span className="highlight-text">web development </span>creating
                  cutting-edge products using modern frameworks like React.js
                  and Next.js, and integrating with <span className="highlight-text">Node.js</span> for full-stack
                  projects.
                </div>
              </p>
              <img src={profileImage} alt="" className="my-img-bottom"></img>
            </div>

            <div className="right-box">
              <img src={profileImage} alt="" className="my-img"></img>
            </div>
          </div>
          <div className="space"></div>
        </div>

        <div className="text-overlay">
          <p className="bio-hello">____ HELLO</p>
          <h1 className="bio-name">
            I'm <span className="highlighted">Pranjal</span> Sachan
          </h1>
          <p className="bio-description">
            This is Pranjal Sachan web developer, Designer and Coder located in
            India, looking for working around the globe.
          </p>
          <button className="download-cv-button" onClick={downloadPDF}>
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
