import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    // Added a slight delay to ensure all elements are rendered before scrolling
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100); 
    
    return () => clearTimeout(timer);
  }, []);
};

export default useScrollToTop;
