import React, { useEffect, useState } from 'react';
import { ArrowDown, Coffee } from 'lucide-react';

const HeroSection = ({ data, branding }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setIsLoaded(true), 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="hero-section">
      <div 
        className="hero-background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <img src={data.image} alt="Café Interior" />
        <div className="hero-overlay-elegant"></div>
      </div>

      <div className={`hero-content-elegant ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-badge">
          <Coffee size={18} />
          <span>Est. 2015</span>
        </div>

        <div className="hero-text-elegant">
          <h1 className="hero-headline-elegant">
            <span className="headline-line">{branding.name}</span>
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-tagline-elegant">{branding.tagline}</p>
          <p className="hero-description-elegant">{data.subheadline}</p>
        </div>

        <div className="hero-buttons-elegant">
          <button 
            className=\"btn-elegant-primary\"
            onClick={() => scrollToSection('#menu')}
          >
            <span>Explore Menu</span>
          </button>
          <button 
            className=\"btn-elegant-secondary\"
            onClick={() => scrollToSection('#contact')}
          >
            <span>Make Reservation</span>
          </button>
        </div>

        <div className=\"scroll-indicator-elegant\" onClick={() => scrollToSection('#about')}>
          <div className="scroll-line"></div>
          <ArrowDown className="scroll-arrow" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
