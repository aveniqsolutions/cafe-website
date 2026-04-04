import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const GallerySection = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
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

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">A glimpse into our world</p>
        </div>

        <div className="gallery-grid">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openLightbox(item)}
            >
              <img src={item.image} alt={item.caption} />
              <div className="gallery-overlay">
                <p className="gallery-caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.caption} />
            <p className="lightbox-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
