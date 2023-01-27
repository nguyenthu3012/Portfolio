import React from 'react'
import hand from '../../assets/hand.svg'
import send from '../../assets/send.svg'

type Props = {}

const Data = (props: Props) => {
    return (
        <div className="home__data">
            <h1 className="home__title">
                Nguyen Thu
                <img className='home__hand' src={hand} alt="" />
            </h1>
            <h3 className="home__subtitle">
                Frontend Developer
            </h3>
            <p className="home__description">
                I'm creative designer based in VietNam, 
                and I'm very passionate and dedicated to my work.
            </p>
            <a href="#contact" className="button button--flex">
                Say Hello
                <img src={send} alt="" />
            </a>
        </div>
    )
}

export default Data