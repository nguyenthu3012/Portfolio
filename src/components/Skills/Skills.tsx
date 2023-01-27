import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import './skills.css'
type Props = {}

const Skills = (props: Props) => {
  return (
    <section id='skills' className='skills section'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend />

            <Backend />
        </div>
    </section>
  )
}

export default Skills