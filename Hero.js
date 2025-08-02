import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Add animation classes after component mounts
    const titleElements = document.querySelectorAll('.sec-title, .sec-sub-title');
    titleElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate');
      }, index * 200);
    });
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero__area-3" id="home">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="hero__inner-3">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title">Digital</h2>
                <h3 className="sec-title title-left">Mark</h3>
                <h3 className="sec-title title-right">eting</h3>
              </div>
              <div className="hero__text-3">
                <p className="hero__text-animation">
                  Static and dynamic secure code review can prevent a day before your product is even released.
                  We can integrate with your dev environment
                </p>
              </div>
              <div className="scroll-down">
                <button onClick={scrollToNextSection}>
                  <i className="fas fa-arrow-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero3-img-ani">
        <img
          src="/assets/imgs/service/3/1.jpg"
          alt="Hero Image"
          className="hero3-img"
        />
      </div>
    </section>
  );
};

export default Hero;