import React from 'react'
import about from '../assets/about.JPG'
import cv from '../assets/gadisa cv.pdf'

function About() {
    return (
        <section className='section about' id='about'>
            <h2 className='section__title'>About me</h2>
            <span className='section__subtitle'>My Introduction</span>
            <div className='about__container container grid'>
                <img alt='about' className='about__img' src={about}></img>
                <div className='about__data'>
                    <p className='about__description'>
                        Web and application developer, with extensive knowledge and years of experience, working on current web and mobile development frameworks, delivering quality work.
                    </p>
                    <div className='about__info'>
                        <div>
                            <span className='about__info-title'>
                                02+
                            </span>
                            <span >
                                Years of <br /> experience
                            </span>
                        </div>
                        <div>
                            <span className='about__info-title'>
                                6+
                            </span>
                            <span>
                                Completed <br /> project
                            </span>
                        </div>
                        {/* <div>
                            <span className='about__info-title'>
                                0+
                            </span>
                            <span >
                                Companies <br /> worked
                            </span>
                        </div> */}
                    </div>
                    <div className='about__buttons'>
                        <a className='button button--flex' download href={cv}>
                            Download Cv<i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
