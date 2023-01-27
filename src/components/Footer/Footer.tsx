import React from "react";
import "./footer.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Nguyen Thu</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#porfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/" className="footer__social-icon">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100010787732132" className="footer__social-icon">
            <i className="bx bxl-facebook"></i>
          </a>

          <a href="https://github.com/MinhThu2507" className="footer__social-icon">
            <i className="bx bxl-github"></i>{" "}
          </a>
        </div>

        <span className="footer__copy">
          &#169; Nguyen Thu. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
