
import React from 'react';

const Clients = () => {
  const clients = [
    'Influence4You',
    'tse',
    'monceau',
    'coudac',
    'flomodia',
    'WEGLOT',
  ];

  return (
    <section className="clients-section-outer">
      <div className="clients-badge-container">
        <div className="clients-badge">
          Join Over
          <span className="highlight-pill">1000+</span>
          Companies with SINC Here
        </div>
      </div>
      <div className="clients-marquee">
        <div className="marquee-content">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <img
                src={`https://via.placeholder.com/150x50/161616/ffffff?text=${client}`}
                alt={client}
              />
            </div>
          ))}
          {clients.map((client, index) => (
            <div key={`copy-${index}`} className="client-card">
              <img
                src={`https://via.placeholder.com/150x50/161616/ffffff?text=${client}`}
                alt={client}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

