import React, { useState } from 'react';
import { Coffee, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Footer = ({ branding, socialMedia }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  const getSocialIcon = (platform) => {
    const icons = {
      Instagram: Instagram,
      Facebook: Facebook,
      Twitter: Twitter
    };
    return icons[platform] || Instagram;
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Floating Animation */}
        <div className="footer-beans">
          <div className="coffee-bean bean-1"></div>
          <div className="coffee-bean bean-2"></div>
          <div className="coffee-bean bean-3"></div>
          <div className="coffee-bean bean-4"></div>
        </div>

        <div className="footer-top">
          <div className="footer-section">
            <div className="footer-logo">
              <Coffee size={32} />
              <span>{branding.name}</span>
            </div>
            <p className="footer-tagline">{branding.tagline}</p>
            <p className="footer-description">{branding.description}</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Reservations</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              {socialMedia.map((social, index) => {
                const Icon = getSocialIcon(social.platform);
                return (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="social-link"
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p className="newsletter-text">Subscribe for updates and exclusive offers</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="newsletter-input-group">
                <Mail size={18} className="newsletter-icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {branding.name}. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
