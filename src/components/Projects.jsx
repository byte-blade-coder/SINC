
import React, { useRef } from 'react';

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
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
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
              <button className="proj-nav-btn proj-prev" aria-label="Previous" onClick={scrollLeft}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button className="proj-nav-btn proj-next" aria-label="Next" onClick={scrollRight}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="projects-grid" ref={gridRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.img} alt={project.name} className="project-img" />
              <div className="project-overlay" />
              <div className="project-info">
                <span className="project-badge">{project.badge}</span>
                <div className="project-bottom">
                  <h3 className="project-name">{project.name}</h3>
                  <a href="#" className="project-arrow-btn" aria-label="View Project">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

