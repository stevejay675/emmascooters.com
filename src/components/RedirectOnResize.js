"use client"
import { useEffect } from 'react';

const RedirectOnResize = () => {
  useEffect(() => {
    const handleResize = () => {
      
      const minWidth = 800; 

      if (window.innerWidth < minWidth) {
        window.location.href = 'https://play.google.com/store/apps';
      }
    };


    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
};

export default RedirectOnResize;
