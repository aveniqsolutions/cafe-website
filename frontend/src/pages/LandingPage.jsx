import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyFamousSection from '../components/WhyFamousSection';
import MenuSection from '../components/MenuSection';
import SpecialtiesSection from '../components/SpecialtiesSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { cafeData } from '../data/mock';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <Navigation isScrolled={isScrolled} branding={cafeData.branding} />
      <HeroSection data={cafeData.hero} branding={cafeData.branding} />
      <AboutSection data={cafeData.about} />
      <WhyFamousSection data={cafeData.whyFamous} />
      <MenuSection data={cafeData.menu} />
      <SpecialtiesSection data={cafeData.specialties} />
      <GallerySection data={cafeData.gallery} />
      <LocationSection data={cafeData.location} />
      <ContactSection />
      <Footer branding={cafeData.branding} socialMedia={cafeData.socialMedia} />
    </div>
  );
};

export default LandingPage;
