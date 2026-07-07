
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">Maritime Domain Awareness & Mission-Critical Engineering</span>
          <h1 className="text-[65px] font-medium hero-title">
  Engineering Maritime
  Domain Awareness Through
  Innovative R&D.
</h1>
          <div className="hero-actions-wrap">
            <a href="#" className="btn-primary hero-btn">
              Explore Capabilities
              <span className="btn-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
            <a href="tel:+923223525116" className="hero-phone">
              <span className="phone-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
                            +92 322 3525116

            </a>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <span className="check-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Innovate Smarter
            </div>
            <div className="feature-item">
              <span className="check-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Technology Simplified
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Business Woman"
            className="main-hero-img"
          />
          <div className="trusted-badge">
            <div className="badge-icon-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div className="badge-text">
              Trusted by 800+<br />
              Tech Giants.
            </div>
          </div>
          <div className="reviews-card">
            <div className="avatars">
              <img src="https://i.pravatar.cc/100?img=11" alt="User 1" />
              <img src="https://i.pravatar.cc/100?img=12" alt="User 2" />
              <img src="https://i.pravatar.cc/100?img=13" alt="User 3" />
              <img src="https://i.pravatar.cc/100?img=14" alt="User 4" />
            </div>
            <div className="reviews-score-wrap">
              <span className="score">4.9</span>
              <span className="stars">★★★★★</span>
            </div>
            <div className="reviews-desc">Based on 600+ Google Reviews.</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-icon-wrap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

