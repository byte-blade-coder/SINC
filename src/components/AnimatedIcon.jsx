import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({
  children,
  className = '',
  hoverScale = 1.15,
  rotate = 8,
  float = true,
  yOffset = 4,
  duration = 2.4,
  delay = 0,
}) => {
  return (
    <motion.span
      className={className}
      animate={float ? { y: [0, -yOffset, 0], rotate: [0, rotate / 2, 0] } : undefined}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      }}
      whileHover={{ scale: hoverScale, rotate: rotate, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedIcon;
