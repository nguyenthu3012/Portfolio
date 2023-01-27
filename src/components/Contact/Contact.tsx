import React, { useRef } from 'react';
import send from '../../assets/send.svg'
import './contact.css'
type Props = {};

const Contact = (props: Props) => {
    
  return (
    <section id="contact" className="contact section">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-grid">Email</h3>
              <span className="contact__card-data">
                minhthu3012000@gmail.com
              </span>

              <a
                href="mailto:minhthu3012000@gmail.com"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-grid">Phone number</h3>
              <span className="contact__card-data">+84 798 990 797</span>

              <a href="" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-github contact__card-icon"></i>

              <h3 className="contact__card-grid">Github</h3>
              <span className="contact__card-data">
                NguyenThu2507@gmail.com
              </span>

              <a href="" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form action="" className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Write a message"
              ></textarea>
            </div>

            <button className="button button--flex">
                Send Message
                <img src={send} alt="" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
