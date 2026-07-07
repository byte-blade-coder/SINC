
import React from 'react';

const Footer = () => {
  return (
    <footer className="custom-site-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="https://via.placeholder.com/100x40?text=LOGO" alt="Logo" />
            </div>
            <p className="footer-desc">
              Fast & Reliable IT Solution Services. We are committed to providing the best service for your business growth.
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-menu">
              <li><a href="#">Managed IT Services</a></li>
              <li><a href="#">Cloud Computing</a></li>
              <li><a href="#">Cybersecurity</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <span className="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                +1 (555) 123-4567
              </li>
              <li className="footer-contact-item">
                <span className="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                info@sinc.com
              </li>
              <li className="footer-contact-item">
                <span className="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                123 IT Street, Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 SINC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

