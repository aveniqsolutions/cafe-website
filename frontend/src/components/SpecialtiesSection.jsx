import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const SpecialtiesSection = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="specialties" className="specialties-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Our Specialties</h2>
          <p className="section-subtitle">Signature creations you won't find anywhere else</p>
        </div>

        <div className={`specialties-carousel ${isVisible ? 'fade-in' : ''}`}>
          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronLeft size={28} />
          </button>

          <div className="carousel-container">
            {data.map((specialty, index) => (
              <div
                key={specialty.id}
                className={`specialty-slide ${index === currentIndex ? 'active' : ''} ${
                  index === currentIndex - 1 || (currentIndex === 0 && index === data.length - 1) ? 'prev' : ''
                } ${
                  index === currentIndex + 1 || (currentIndex === data.length - 1 && index === 0) ? 'next' : ''
                }`}
              >
                <div className="specialty-content">
                  <div className="specialty-image">
                    <img src={specialty.image} alt={specialty.name} />
                    <div className="specialty-badge">
                      <Star size={16} fill="currentColor" />
                      <span>{specialty.badge}</span>
                    </div>
                  </div>
                  <div className="specialty-info">
                    <h3 className="specialty-name">{specialty.name}</h3>
                    <p className="specialty-description">{specialty.description}</p>
                    <button className="try-btn">Try This</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {data.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
