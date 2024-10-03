import React, { useEffect, useState } from 'react';
import "./modal.css";
import crossIcon from '../assets/cross.png';

const Modal = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the modal
    const hasSeenModal = localStorage.getItem('hasSeenModal');

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setOpen(true);
        setShow(true);
      }, 2000); // Show the modal after 2 seconds

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false); 
    setTimeout(() => {
      setShow(false);
      // Save a flag in localStorage to prevent showing the modal again
      localStorage.setItem('hasSeenModal', true);
    }, 500);
  };

  return (
    <div>
      <div className={`modal-overlay ${open ? "fade-in" : ""}`} style={{ display: show ? 'flex' : 'none' }}>
        <div className={`modal-content ${open ? "slide-in" : ""}`}>
          <img src={crossIcon} alt='Close' className='cross-button' onClick={handleClose} />
          <h2 className='modal-heading'>Welcome to My Portfolio!</h2>
          <p className='modal-para'>I'm glad you're here. Explore my projects and skills!</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
