import React from 'react';
import './project.css';
import Ecommerce from '../assets/e-commerce.webp';
import Movieimage from '../assets/movie-image.webp';

const Project = () => {
  return (
    <div className="projects-section">
      <h1 className="section-title">My Projects</h1>

      <div className="project">
        <h2 className="project-title">Recommendation System</h2>
        <div className="project-content">
          <img src={Movieimage} alt="Movie Recommendation System" className="project-image" />
          <p className="project-description">
            This project involves the development of an advanced Movie Recommendation System designed
            to enhance user engagement by providing personalized film suggestions. Utilizing sophisticated 
            algorithms and data analysis techniques, the system leverages user preferences, viewing history, 
            and ratings to deliver tailored movie recommendations.
          </p>
          <a href="https://github.com/pranjalsachan9935/Movie_Recommendation_System" target="_blank" rel="noopener noreferrer">
            <button className="project-button">Visit Project</button>
          </a>
        </div>
      </div>

      <div className="project">
        <h2 className="project-title">E-commerce Website</h2>
        <div className="project-content">
          <img src={Ecommerce} alt="E-commerce Website" className="project-image" />
          <p className="project-description">
            This project involves the development of a comprehensive e-commerce website designed to 
            provide an intuitive and seamless shopping experience for users. The website features a dynamic 
            product catalog, allowing users to browse and search for a wide range of products with ease. 
            It incorporates a user-friendly interface with advanced filtering options.
          </p>
          <a href="https://ecommerce-multimart-two.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="project-button">Visit Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
