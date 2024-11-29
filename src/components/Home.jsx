import React from 'react'
import { Socials } from './Socials'
import { SOCIALS } from '../data'

export const Home = () => {
    return (
        <div className='developer-home'>
            <div className='home-desc'>
                <h4>
                    A developer passionate about crafting sleek, seamless web applications that blend beauty with performance.
                </h4>
                <br />
                <a 
                    href='/CJ_SAN_JUAN_CV.pdf' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='resume'
                >
                    GRAB A RESUME
                </a>
                <div className='home-btn'>
                    {
                        SOCIALS.map((socials, index) => (
                            <Socials link={socials.link} social={socials.social} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className='dev-image'>
                <img src='/image.png' alt='developer' />
            </div>
        </div>
    )
}
