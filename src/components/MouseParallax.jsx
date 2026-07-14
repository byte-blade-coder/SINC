import React, { createContext, useContext, useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const MouseParallaxContext = createContext(null);

export const MouseParallaxProvider = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 25 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Get position normalized between -0.5 and 0.5
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <MouseParallaxContext.Provider value={{ mouseX: springX, mouseY: springY }}>
      {children}
    </MouseParallaxContext.Provider>
  );
};

export const useMouseParallax = () => {
  const context = useContext(MouseParallaxContext);
  if (!context) {
    return { mouseX: useMotionValue(0), mouseY: useMotionValue(0) };
  }
  return context;
};
