import React from 'react'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Data from '../../components/Data/Data'
import Portfolio from '../../components/Portfolio/Portfolio'
import Qualification from '../../components/Qualification/Qualification'
import ScrollDown from '../../components/ScrollDown/ScrollDown'
import Service from '../../components/Service/Service'
import Skills from '../../components/Skills/Skills'
import Social from '../../components/Social/Social'
import './home.css'
type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <section id='home' className="home section">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />

            <div className="home__img"></div>

            <Data />
          </div>

          <ScrollDown />
        </div>
      </section>

      <About />

      <Skills />

      <Service />

      <Qualification />

      <Portfolio />

      <Contact />
    </>
  )
}

export default Home