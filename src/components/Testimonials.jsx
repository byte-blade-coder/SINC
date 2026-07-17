
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      name: 'Cdre. (R) Imran Khalid',
      role: 'Former Commodore, Pakistan Navy',
      text: '"SINC Lab\'s sensing and analytics integration gave our team the Maritime Domain Awareness picture we didn\'t have before — reliable data, delivered in real time, from a system that held up in the field."',
      avatar: 'IK',
      rating: 5,
      org: 'Pakistan Navy',
    },
    {
      name: 'Dr. Ahmed Farooq',
      role: 'Director, Naval Research Institute',
      text: '"Their FPGA-based processing platform exceeded our benchmarks for real-time radar signal processing. The team\'s depth in both hardware and software engineering is exceptional."',
      avatar: 'AF',
      rating: 5,
      org: 'NRI',
    },
    {
      name: 'Engr. Saad Murtaza',
      role: 'Systems Lead, C4ISR Division',
      text: '"From SDR communication links to AIS vessel tracking dashboards, SINC Lab delivered end-to-end. Their work has become mission-critical infrastructure for our maritime operations."',
      avatar: 'SM',
      rating: 5,
      org: 'C4ISR Division',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <AnimationWrapper>
      <section className="testi-section">
        <div className="testi-container">

          {/* Header */}
          <motion.div
            className="testi-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="testi-label">[ CLIENT TESTIMONIALS ]</span>
            <h2 className="testi-title">Trusted by<br />Maritime Leaders.</h2>
            <p className="testi-subtitle">Real feedback from the teams and institutions we've built for.</p>
          </motion.div>

          {/* Slider */}
          <div className="testi-slider-wrap">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                className="testi-card"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
              >
                {/* Quote Icon */}
                <div className="testi-quote-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="#23abe6" opacity="0.25">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="testi-stars">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#23abe6">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="testi-text">{testimonials[activeIndex].text}</p>

                {/* Author */}
                <div className="testi-author">
                  <div className="testi-avatar">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div className="testi-author-info">
                    <div className="testi-name">{testimonials[activeIndex].name}</div>
                    <div className="testi-role">{testimonials[activeIndex].role}</div>
                  </div>
                  <div className="testi-org-badge">{testimonials[activeIndex].org}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  className={`testi-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.85 }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Testimonials;
