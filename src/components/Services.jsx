
import React from 'react';

const Services = () => {
  const services = [
    {
      number: '01',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <polyline points="9 8 7 10 9 12" />
          <polyline points="15 8 17 10 15 12" />
        </svg>
      ),
      title: 'Managed IT Services',
      desc: 'Comprehensive IT management, including monitoring, maintenance.',
      list: ['24/7 system monitoring', 'IT support & troubleshooting', 'Remote IT assistance'],
    },
    {
      number: '02',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <line x1="12" y1="12" x2="12" y2="16" />
          <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
      ),
      title: 'Cloud Computing',
      desc: 'Scalable cloud-based services, including migration, storage, and security.',
      list: ['Scalable cloud storage', 'SaaS, PaaS, and IaaS integration', 'Hybrid & multi-cloud'],
    },
    {
      number: '03',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1.5" />
        </svg>
      ),
      title: 'Cybersecurity Solutions',
      desc: 'Advanced security measures, including firewall protection, threat detection.',
      list: ['Firewall & network security', 'Threat detection & prevention', 'Endpoint protection'],
    },
    {
      number: '04',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h-.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v-.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0-1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: 'IT Consulting & Strategy',
      desc: 'Expert guidance to optimize IT infrastructure, streamline operations, and drive.',
      list: ['Transformation planning', 'IT Infrastructure optimization', 'Risk assessment'],
    },
    {
      number: '05',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Network Infrastructure',
      desc: 'Designing, implementing, and maintaining secure and high-performance.',
      list: ['Network design & setup', 'Wired & wireless solutions', 'Network monitoring'],
    },
  ];

  return (
    <div className="services-section-outer">
      <section className="services-section">
        <div className="services-container">
          <div className="services-grid">
            <div className="services-title-card">
              <span className="services-label">[ EXPLORE SERVICES ]</span>
              <h2 className="services-heading">
                Reliable IT Solution<br />
                for a Smarter.
              </h2>
              <a href="#" className="services-btn">
                Learn More
                <span className="services-btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </a>
            </div>
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-number-box">{service.number}</div>
                <div className="service-icon-wrap">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-list">
                  {service.list.map((item, i) => (
                    <li key={i}>
                      <span className="check-icon">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#23abe6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#" className="service-link">
                  <span>Learn more</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

