import React, { useEffect, useRef, useState } from 'react';
import { Coffee, Users, Heart } from 'lucide-react';

const AboutSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const iconMap = {
    Coffee: Coffee,
    Users: Users,
    Heart: Heart
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">{data.story}</p>
        </div>

        {/* Timeline */}
        <div className={`timeline ${isVisible ? 'fade-in' : ''}`}>
          {data.timeline.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item ${isVisible ? 'slide-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="values-grid">
          {data.values.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <div 
                key={index} 
                className={`value-card ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="value-icon">
                  <Icon size={32} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
