import React, { useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const Navigation = ({ isScrolled, branding }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Coffee className="logo-icon" />
          <span className="logo-text">{branding.name}</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="reserve-btn desktop-reserve">Reserve a Table</button>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button className="reserve-btn mobile-reserve">Reserve a Table</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
