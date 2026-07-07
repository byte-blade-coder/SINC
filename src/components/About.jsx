
import React from 'react';

const About = () => {
  const stats = [
    { number: '3K', label: 'Successful Projects.' },
    { number: '98', label: 'IT Professionals.' },
  ];

  return (
    <div className="about-section-outer">
      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <div className="about-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team Meeting"
                className="about-main-img"
              />
            </div>
            <div className="about-cards-row">
              <div className="about-exp-card">
                <div className="about-exp-label">EXPERIENCE</div>
                <div className="about-exp-number">
                  20<sup>+</sup>
                </div>
                <p className="about-exp-desc">Years of Excellence in IT Solutions Company.</p>
              </div>
              <div className="about-founder-card">
                <img
                  src="https://i.pravatar.cc/100?img=15"
                  alt="Burdee Nicolas"
                  className="about-founder-avatar"
                />
                <div className="about-founder-info">
                  <div className="about-founder-name">Burdee Nicolas</div>
                  <div className="about-founder-role">Co. Founder</div>
                </div>
                <div className="about-founder-sign">
                  <svg width="60" height="24" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 20 Q10 5 20 18 Q30 28 38 10 Q46 2 55 15 Q62 25 70 12 Q75 5 78 10" stroke="#23abe6" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="about-right">
            <span className="about-label">[ ABOUT SINC ]</span>
            <h2 className="about-heading">
              Delivering Solution That Drive Our Innovation & Fast Success.
            </h2>
            <p className="about-desc">
              We are a team of passionate tech experts delivering innovative IT solutions tailored to help businesses grow, adapt, and thrive in a digital. Stay ahead of the competition.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="about-stat">
                  <div className="about-stat-num">
                    {stat.number}
                    <sup>+</sup>
                  </div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="about-bottom-row">
              <a href="#" className="about-btn">
                Learn More
                <span className="about-btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="about-award-badge">
              <div className="about-award-ring-wrap">
                <div className="about-award-inner">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15l-3 3-3-3V5h6v10z" />
                    <circle cx="12" cy="18" r="3" />
                    <path d="M12 11h2l1-4h-3" />
                  </svg>
                </div>
                <svg className="about-award-ring" viewBox="0 0 120 120" width="110" height="110">
                  <defs>
                    <path id="circlePath" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
                  </defs>
                  <text fontSize="10.5" fontFamily="Manrope, sans-serif" fill="#ffffff" letterSpacing="2.5" fontWeight="600">
                    <textPath href="#circlePath">AWARD WINNING AGENCY • 2019 • AWARD WINNING AGENCY • 2019 • </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

