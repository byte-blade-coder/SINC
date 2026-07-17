
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';

const Projects = () => {
  const gridRef = useRef(null);

  const scrollLeft = () => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.querySelector('.project-card').offsetWidth + 20; // 20px gap
      gridRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.querySelector('.project-card').offsetWidth + 20; // 20px gap
      gridRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      name: 'Cloud Migration System',
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Solution'
    },
    {
      name: 'Digital Growth Strategy',
      img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Solution'
    },
    {
      name: 'Mobile App Development',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Solution'
    },
    {
      name: 'Business Transformation',
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Solution'
    },
  ];

  return (
    <AnimationWrapper>
      <section className="projects-section">
        <div className="projects-container">
          <motion.div 
            className="projects-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="projects-header-left">
              <span className="projects-subtitle">[ RECENT PROJECTS ]</span>
              <h2 className="projects-title">
                Breaking Boundaries,<br />
                Building Dreams.
              </h2>
            </div>
            <div className="projects-header-right">
              <p className="projects-desc">
                Our projects are tailored to meet<br />
                your unique business needs.
              </p>
              <div className="projects-nav">
                <motion.button 
                  className="proj-nav-btn proj-prev" 
                  aria-label="Previous" 
                  onClick={scrollLeft}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </motion.button>
                <motion.button 
                  className="proj-nav-btn proj-next" 
                  aria-label="Next" 
                  onClick={scrollRight}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
          <div className="projects-grid" ref={gridRef}>
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={project.img} alt={project.name} className="project-img" />
                <div className="project-overlay" />
                <div className="project-info">
                  <span className="project-badge">{project.badge}</span>
                  <div className="project-bottom">
                    <h3 className="project-name">{project.name}</h3>
                    <motion.a 
                      href="#" 
                      className="project-arrow-btn" 
                      aria-label="View Project"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ display: 'block' }}
                      >
                        <line x1="4" y1="12" x2="12" y2="4" />
                        <polyline points="4 4 12 4 12 12" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Projects;

