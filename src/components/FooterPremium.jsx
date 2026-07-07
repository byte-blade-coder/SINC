
import React from 'react';

const FooterPremium = () => {
  return (
    <footer className="footer-premium">
      {/* Background Branding */}
      <div className="footer-bg-branding">
        <span>SINC</span>
      </div>

      {/* Main Content */}
      <div className="footer-main">
        <div className="footer-left">
          <h2>
            ENGINEERING RELIABILITY<br />
            FOR OPERATIONAL<br />
            READINESS
          </h2>
        </div>
        <div className="footer-right">
          <div className="footer-nav-col">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h3>SOLUTIONS</h3>
            <ul>
              <li><a href="#">EW Systems</a></li>
              <li><a href="#">Signal Intelligence</a></li>
              <li><a href="#">Embedded Systems</a></li>
              <li><a href="#">AI Solutions</a></li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h3>RESEARCH</h3>
            <ul>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Publications</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Innovation</a></li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h3>CONTACT</h3>
            <ul>
              <li><a href="#">Email</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-logo">
            <img src="logo.png" alt="SINC LAB Logo" style={{ maxHeight: '65git initpx' }} />
          </div>
        </div>
        <div className="footer-bottom-right">
          <a href="#" className="footer-btn">CONTACT US</a>
          <a href="#" className="footer-btn">EXPLORE PROJECTS</a>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .footer-premium {
          background: #0d0d0d;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 100px 60px 40px;
        }

        .footer-bg-branding {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50%;
          overflow: hidden;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          pointer-events: none;
          z-index: 0;
        }

        .footer-bg-branding span {
          font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 900;
          font-size: 28vw;
          color: rgba(35, 171, 230, 0.05);
          line-height: 1;
          white-space: nowrap;
        }

        .footer-main {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto 80px;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 80px;
        }

        .footer-left h2 {
          font-family: 'Manrope', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 900;
          font-size: 56px;
          line-height: 1.1;
          margin: 0;
          text-transform: uppercase;
        }

        .footer-right {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .footer-nav-col h3 {
          font-family: 'Manrope', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 24px;
          color: #23abe6;
        }

        .footer-nav-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-nav-col a {
          font-family: 'Figtree', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 15px;
          color: #B8B8B8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-nav-col a:hover {
          color: #23abe6;
        }

        .footer-bottom {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 40px;
          border-top: 1px solid rgba(35,171,230,0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-logo span {
          font-family: 'Manrope', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 700;
          font-size: 16px;
        }

        .footer-bottom-right {
          display: flex;
          gap: 16px;
        }

        .footer-btn {
          font-family: 'Manrope', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 600;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 14px 32px;
          border: 1px solid rgba(35,171,230,0.3);
          border-radius: 999px;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.3s ease;
          background: transparent;
        }

        .footer-btn:hover {
          background: #23abe6;
          color: #000000;
          border-color: #23abe6;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .footer-premium {
            padding: 80px 40px 32px;
          }
          .footer-main {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .footer-left h2 {
            font-size: 44px;
          }
        }

        @media (max-width: 768px) {
          .footer-premium {
            padding: 60px 24px 24px;
          }
          .footer-right {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .footer-left h2 {
            font-size: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .footer-bottom-right {
            width: 100%;
            flex-direction: column;
          }
          .footer-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterPremium;

