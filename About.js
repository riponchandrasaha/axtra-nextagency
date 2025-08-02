import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Add animation classes
    const titleElements = document.querySelectorAll('.sec-title, .sec-sub-title');
    titleElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('title-anim');
      }, index * 200);
    });
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about__area-3" id="about">
      <div className="container pt-140 pb-110">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="about__img-3">
              <img
                src="/assets/imgs/service/3/1.jpg"
                alt="About Thumbnail"
                className="smootherReset768"
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="sec-title-wrapper">
              <h2 className="sec-sub-title title-anim">Who We Are</h2>
              <h3 className="sec-title title-anim">We are leading digital marketing agency.</h3>
            </div>
            <div className="sec-text-wrapper">
              <div className="sec-text text-anim">
                <p>
                  We're a team of strategic digital marketing working globally with largest brands,
                  We believe that progress only happens when you refused to play things safe.
                  We combine ideas and behaviors, and insights with design, technological data to
                  produce brand experiences that customers love our services.
                </p>
                <div className="btn_wrapper">
                  <a className="wc-btn-light btn-hover btn-item" onClick={scrollToContact}>
                    <span></span> Explore Us <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;