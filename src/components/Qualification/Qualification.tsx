import React, { useState } from "react";
import "./qualification.css";
type Props = {};

const Qualification = (props: Props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">TDT University</h3>
                <span className="qualification__subtitle">
                  Completed - Studying
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">R2S's Student</h3>
                <span className="qualification__subtitle">
                  Completed - Studying
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Cybersoft</h3>
                <span className="qualification__subtitle">
                  Completed - Studying
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Odoo Developer</h3>
                <span className="qualification__subtitle">
                  Completed - Working
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
