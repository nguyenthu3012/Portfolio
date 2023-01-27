import React from 'react'
import './about.css'
import aboutImage from '../../assets/about.jpg'
import CV from '../../assets/NguyenThuCV.pdf'
import files from '../../assets/files.svg'
import Info from './Info'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='about section' id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
    
        <div className="about__container container grid">
            <img src={aboutImage} className='about__img' alt="" />
            
            <div className="about__data">
                <Info />

                <p className='about__description'>
                Frontend developer, I create web pages with UI / UX user interface, 
                I have 4 years of studying in Ton Duc Thang University and happy with coding.
                </p>

                <a download={''} href={CV} className='button button--flex'>Download CV
                    <img src={files} alt="" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default About