import React from 'react'
import profile from '../assets/removedbg.png'

function Home() {
    return (
        <div className='main'>
            <section className='home section' id='home'>
                <div className='home__container container grid'>
                    <div className='home__content grid'>
                        <div className='home__social'>
                            <a href='https://www.linkedin.com/in/gadisa-aboma-5b7934192/' rel="noreferrer" target="_blank" className='home__social-icon'>
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                            <a href='https://www.facebook.com/gadisa.aboma.7/' rel="noreferrer" target="_blank" className='home__social-icon'>
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href='https://github.com/GadisaAboma' rel="noreferrer" target="_blank" className='home__social-icon'>
                                <i className="uil uil-github"></i>
                            </a>
                        </div>
                        <div className='home__img'>
                            <svg className='home__blob' viewBox="0 0 200 187" >
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                    <image alt='my_profile' x={12} className='home__blob-img' href={profile} />
                                </g>
                            </svg>
                        </div>
                        <div className='home__data'>
                            <h1 className='home__title'>Hi, I'm Gadisa</h1>
                            <h3 className='home__subtitle'>Web and Mobile app developer</h3>
                            <p className='home__description'>High level experience in web and mobile application development knowledge, producing quality work.</p>
                            <a className='button button--flex' href='#contact'>
                                contact me <i className="uil uil-message"></i>
                            </a>
                        </div>
                    </div>
                    <div className='home__scroll'>
                        <a href='#about' className='home__scroll-button button--flex'>
                            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span className='home__scroll-name'>Scroll down</span>
                            <i className="uil uil-arrow-down home__scroll-down"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
