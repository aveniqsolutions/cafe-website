import React, { useEffect, useRef, useState } from 'react';
import { Award, TrendingUp, Leaf, Clock } from 'lucide-react';

const WhyFamousSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(data.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
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

  const animateCounters = () => {
    data.forEach((item, index) => {
      const target = parseInt(item.number.replace(/\D/g, ''));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, 16);
    });
  };

  const getIcon = (index) => {
    const icons = [Users, Award, Leaf, Clock];
    const Icon = icons[index] || Award;
    return <Icon size={40} />;
  };

  const formatNumber = (num, original) => {
    if (original.includes('K')) return `${num / 1000}K+`;
    if (original.includes('%')) return `${num}%`;
    return `${num}+`;
  };

  return (
    <section id="why-famous" className="why-famous-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Why We're Famous</h2>
          <p className="section-subtitle">Numbers that speak louder than words</p>
        </div>

        <div className="stats-grid">
          {data.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">
                {getIcon(index)}
              </div>
              <div className="stat-number">
                {isVisible ? formatNumber(counts[index], stat.number) : '0'}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Users = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

export default WhyFamousSection;
