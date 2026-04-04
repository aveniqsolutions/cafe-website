import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = ({ data, branding }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div 
        className="hero-background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <img src={data.image} alt="Café Interior" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text animate-fade-in">
          <h1 className="hero-headline">{data.headline}</h1>
          <p className="hero-subheadline">{data.subheadline}</p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Menu</button>
            <button className="btn-secondary">Our Story</button>
          </div>
        </div>

        <div className="scroll-indicator">
          <ArrowDown className="bounce-animation" />
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* Floating Coffee Steam Animation */}
      <div className="steam-container">
        <div className="steam steam-1"></div>
        <div className="steam steam-2"></div>
        <div className="steam steam-3"></div>
      </div>
    </section>
  );
};

export default HeroSection;
