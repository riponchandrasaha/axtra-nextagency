import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact__area" id="contact">
      <div className="container pt-140 pb-140">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper">
              <h2 className="sec-sub-title title-anim">Contact Us</h2>
              <h3 className="sec-title title-anim">Let's work together</h3>
            </div>
            <div className="contact__content">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="contact__info">
                    <h4>Get in touch</h4>
                    <p>
                      Ready to start your next project? Let's talk about how we can help
                      bring your ideas to life.
                    </p>
                    <div className="contact__details">
                      <div className="contact__item">
                        <i className="fas fa-phone"></i>
                        <span>+(02) - 094 980 547</span>
                      </div>
                      <div className="contact__item">
                        <i className="fas fa-envelope"></i>
                        <span>info@extradesign.com</span>
                      </div>
                      <div className="contact__item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>230 Norman Street New York, QC (USA) H8R 1A1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="contact__form">
                    <form onSubmit={handleSubmit}>
                      <div className="form__group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form__group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form__group">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <div className="form__group">
                        <button type="submit" className="wc-btn-black btn-hover btn-item">
                          <span></span> Send Message <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;