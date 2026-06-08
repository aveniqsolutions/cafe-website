import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const LocationSection = ({ data }) => {
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

  const openInMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${data.coordinates.lat},${data.coordinates.lng}`;
    window.open(mapsUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${data.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${data.email}`;
  };

  return (
    <section id="location" className="location-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">Visit Us</h2>
          <p className="section-subtitle">We'd love to see you</p>
        </div>

        <div className="location-content">
          {/* Map Container */}
          <div className={`map-container ${isVisible ? 'fade-in' : ''}`}>
            <iframe
              title="Café Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-122.68840789794923%2C45.50520%2C-122.66839599609376%2C45.52520&layer=mapnik&marker=${data.coordinates.lat}%2C${data.coordinates.lng}`}
              allowFullScreen
            ></iframe>
            <button className="map-overlay" onClick={openInMaps}>
              <MapPin size={24} />
              <span>Open in Maps</span>
              <ExternalLink size={16} />
            </button>
            </div>

          {/* Contact Information */}
          <div className={`contact-info ${isVisible ? 'fade-in-up' : ''}`}>
           <div className="info-card" onClick={openInMaps} style={{ cursor: 'pointer' }}>
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3>Address</h3>
                <p>{data.address}</p>
                <p>{data.city}</p>
              </div>
            </div>

            <div className="info-card" onClick={handleCall} style={{ cursor: 'pointer' }}>
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>{data.phone}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>{data.email}</p>
              </div>
            </div>

            <div className="info-card hours-card">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div className="info-content">
                <h3>Hours</h3>
                {data.hours.map((schedule, index) => (
                  <div key={index} className="hours-row">
                    <span className="day">{schedule.day}</span>
                    <span className="time">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
