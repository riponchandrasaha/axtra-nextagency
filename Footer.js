import React from 'react';

const Footer = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer__area-3">
      <div className="footer__top-3">
        <div className="footer__top-wrapper-3">
          <div className="footer__logo-3 pt-120">
            <h2 style={{ color: '#fff', margin: 0, fontSize: '24px' }}>Digital Marketing</h2>
            <p>
              When do they work well, and when do they on us and finally,
              when do we actually need how can we avoid them.
            </p>
          </div>
          <div className="footer__social-3">
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> Linkedin
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__contact-3">
            <a className="end" onClick={scrollToContact}>Let's talk</a>
          </div>
        </div>
      </div>
      <div className="footer__btm-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="footer__copyright-3">
                <p>
                  © 2022 - 2025 | All rights reserved by{' '}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Digital Marketing Agency
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="footer__nav-2">
                <ul className="footer-menu-2 menu-anim">
                  <li>
                    <a onClick={() => scrollToSection('about')}>about us</a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection('contact')}>contact</a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection('services')}>services</a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection('portfolio')}>portfolio</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;