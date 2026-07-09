
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="custom-site-footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        <motion.div 
          className="footer-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="footer-logo">
              <img src="https://via.placeholder.com/100x40?text=LOGO" alt="Logo" />
            </div>
            <p className="footer-desc">
              Fast & Reliable IT Solution Services. We are committed to providing the best service for your business growth.
            </p>
          </motion.div>
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-menu">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a href="#">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="footer-title">Services</h4>
            <ul className="footer-menu">
              {['Managed IT Services', 'Cloud Computing', 'Cybersecurity', 'Consulting'].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a href="#">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              {[
                { icon: 'phone', text: '+1 (555) 123-4567' },
                { icon: 'email', text: 'info@sinc.com' },
                { icon: 'location', text: '123 IT Street, Tech City, TC 12345' }
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="footer-contact-item"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="icon">
                    {item.icon === 'phone' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                    {item.icon === 'email' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    )}
                    {item.icon === 'location' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    )}
                  </span>
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p>© 2026 SINC. All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

