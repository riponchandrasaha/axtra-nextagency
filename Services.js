import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    // Add service animation classes
    const serviceItems = document.querySelectorAll('.service__item-3');
    serviceItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('service_animation');
      }, index * 200);
    });
  }, []);

  const services = [
    {
      title: "Search Engine\nOptimization",
      description: "We help brands stand out through awesome, elegant visual design. Our design mainly philosophy.",
      features: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
      image: "/assets/imgs/service/3/1.jpg"
    },
    {
      title: "Email\nMarketing",
      description: "We help brands stand out through awesome, elegant visual design. Our design mainly philosophy.",
      features: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
      image: "/assets/imgs/service/3/2.png"
    },
    {
      title: "Content\nMarketing",
      description: "We help brands stand out through awesome, elegant visual design. Our design mainly philosophy.",
      features: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
      image: "/assets/imgs/service/3/3.png"
    },
    {
      title: "Social\nMarketing",
      description: "We help brands stand out through awesome, elegant visual design. Our design mainly philosophy.",
      features: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
      image: "/assets/imgs/service/3/4.png"
    }
  ];

  return (
    <section className="service__area-3 pb-150" id="services">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper pt-130 text-anim">
              <h2 className="sec-sub-title title-anim">Services</h2>
              <h3 className="sec-title title-anim">Our marketing <br /> Services</h3>
              <p>
                Consumers today rely heavily on digital means to research products.
                We research a brand of blend engaging with it, according to the meanwhile,
                51% of consumers say they use Google to research products before buying.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xx-12">
            <div className="service__list-3">
              {services.map((service, index) => (
                <div key={index} className="service__item-3 service_animation">
                  <h3>
                    <a className="service__title-3" href="#services">
                      {service.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < service.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </a>
                  </h3>
                  <div className="service__content-3">
                    <p>{service.description}</p>
                    <ul className="">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <a className="wc-btn-black btn-hover btn-item" href="#services">
                        <span></span> Details<i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                </div>
              ))}
              <div className="service3__img-wrap">
                <div className="service3__img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;