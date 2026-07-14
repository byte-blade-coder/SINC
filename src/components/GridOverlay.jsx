import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useMouseParallax } from './MouseParallax';

const GridOverlay = () => {
  const { mouseX, mouseY } = useMouseParallax();

  // Convert normalized -0.5 to 0.5 coordinates into percentages 0% to 100%
  const pxX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const pxY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  // Mask string that follows the cursor using useTransform
  const maskString = useTransform([pxX, pxY], ([x, y]) => {
    return `radial-gradient(circle 320px at ${x} ${y}, black 20%, transparent 100%)`;
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Outer vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_95%)]" />
      
      {/* Base Faint White Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Interactive Glowing Emerald Spotlight Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.18] mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.7) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.7) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px',
          WebkitMaskImage: maskString,
          maskImage: maskString,
        }}
      />
    </div>
  );
};

export default GridOverlay;
