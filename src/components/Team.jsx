
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Eade Marren',
      role: 'Chief Executive',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Savannah Ngueen',
      role: 'Operations Head',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Cameron William',
      role: 'Marketing Lead',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Olivia Fox',
      role: 'Business Director',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <div className="team-header-left">
            <span className="team-subtitle">[ MEET OUR TEAM ]</span>
            <h2 className="team-title">
              Creative Minds Behind<br />
              our Team.
            </h2>
          </div>
          <div className="team-header-right">
            <p className="team-desc">
              Our teams are customized to meet<br />
              your unique Ideas.
            </p>
            <a href="#" className="team-btn-more">
              More Member
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img-wrapper">
                <img src={member.img} alt={member.name} />
                <div className="team-share-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

