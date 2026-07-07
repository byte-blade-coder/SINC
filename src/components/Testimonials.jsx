
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: 'Guy Hawkins',
      role: 'Co. Founder',
      text: 'Working with Tkmino has been a game-changer for our business. Their team\'s professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we\'ve seen after partnering.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Jane Doe',
      role: 'CEO',
      text: 'Excellent service and support! They helped us migrate to the cloud seamlessly and our efficiency has increased dramatically.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'John Smith',
      role: 'CTO',
      text: 'Their cybersecurity solutions are top-notch. We feel much more secure knowing our data is in good hands.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonials-section-outer">
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}>
                <div className="testimonial-avatars">
                  {testimonials.map((t, i) => (
                    <img
                      key={i}
                      src={t.avatar}
                      alt={t.name}
                      className={`testimonial-avatar ${i === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(i)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </div>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

