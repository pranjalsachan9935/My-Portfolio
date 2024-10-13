import React from 'react';
import './NotFound.css';
import notFound from '../assets/notfound.svg'

const NotFound = () => {
    return (
        <div className="notfound-container">
          <img src={notFound} alt='not_found' className='not-found-image'/>
        </div>
    );
};

export default NotFound;
