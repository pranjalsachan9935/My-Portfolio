import React from 'react';
import './project.css';
import Ecommerce from '../assets/e-commerce.webp';
import Movieimage from '../assets/movie-image.webp';


const Project = () => {
  return (
    <div className='outer-project-layer'>
      <h1 className='project-title'>My Projects</h1>

      <div className='project-container'>
        <div className='left-container'>
          <h2 className='project-heading'>Recommendation System</h2>
          <img src={Movieimage} alt='Ecommerce-Image' className='project-image'/>
          <p className='container-text'>This project involves the development of an advanced Movie Recommendation System designed to enhance user engagement by providing personalized film suggestions. Utilizing sophisticated algorithms and data analysis techniques, the system leverages user preferences, viewing history, and ratings to deliver tailored movie recommendations. The platform offers a seamless and interactive interface where users can explore recommended movies, view detailed information, and receive suggestions based on their interests. Key features include a robust recommendation engine that employs collaborative filtering and content-based approaches to predict user preferences accurately.</p>

          <a href="https://github.com/pranjalsachan9935/Movie_Recommendation_System" target="_blank" rel="noopener noreferrer" >
            <button className='full-project-button'>Visit Project</button>
          </a>

        </div>

        <div className='right-container'>
          <h2 className='project-heading'>E-commerce Website</h2>
          <img src={Ecommerce} alt='Ecommerce-Image' className='project-image'/>
          <p className='container-text'>This project involves the development of a comprehensive e-commerce website designed to provide an intuitive and seamless shopping experience for users. The website features a dynamic product catalog, allowing users to browse and search for a wide range of products with ease. It incorporates a user-friendly interface with advanced filtering options and a streamlined checkout process to enhance customer satisfaction. Key functionalities include secure payment gateways, real-time order tracking, and personalized recommendations based on user preferences and browsing history. The site is built with responsive design principles, ensuring optimal performance across various devices and screen sizes.</p>

          <a href="https://github.com/pranjalsachan9935/Ecommerce" target="_blank" rel="noopener noreferrer"  >
            <button className='full-project-button'>
              Visit Project</button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Project;
