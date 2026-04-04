import React, { useState, useEffect, useRef } from 'react';
import { Filter } from 'lucide-react';

const MenuSection = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const filteredItems = selectedCategory === 'All' 
    ? data.items 
    : data.items.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="menu-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Crafted with care, served with pride</p>
        </div>

        {/* Category Filters */}
        <div className={`menu-filters ${isVisible ? 'fade-in' : ''}`}>
          <Filter size={20} className="filter-icon" />
          {data.categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`menu-item ${isVisible ? 'fade-in-up' : ''} ${item.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.featured && <span className="featured-badge">Popular</span>}
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
                <div className="menu-item-overlay">
                  <button className="quick-view-btn">View Details</button>
                </div>
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-description">{item.description}</p>
                <span className="menu-item-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
