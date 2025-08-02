import React, { useEffect } from 'react';

const Brand = () => {
  useEffect(() => {
    // Add fade animation to brand items
    const brandItems = document.querySelectorAll('.brand__item-2');
    brandItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('fade_bottom');
      }, index * 100);
    });
  }, []);

  const brandLogos = [
    '/assets/imgs/service/3/1.jpg',
    '/assets/imgs/service/3/2.png',
    '/assets/imgs/service/3/3.png',
    '/assets/imgs/service/3/4.png'
  ];

  return (
    <section className="brand__area">
      <div className="container pt-140 pb-140">
        <div className="row">
          <div className="col-xxl-12">
            <h2 className="brand__title-3 title-anim">We worked with global largest brands</h2>
            <div className="brand__list-3">
              {brandLogos.map((logo, index) => (
                <div key={index} className="brand__item-2 fade_bottom">
                  <img src={logo} alt={`Brand Logo ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;