import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header__area ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="header__inner">
              <div className="header__logo">
                <a href="#home">
                  <h2 style={{ color: '#fff', margin: 0, fontSize: '24px' }}>Digital Marketing</h2>
                </a>
              </div>
              <div className="header__nav">
                <nav>
                  <ul>
                    <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                    <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
                    <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
                    <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;