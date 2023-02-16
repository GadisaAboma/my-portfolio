import React from 'react'
import Telemedicine from '../assets/telemedicine.jpg'
import School from '../assets/school.png'
import commerce from '../assets/commerce.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {

    return (
        <section className='portifolio section' id='portifolio'>
            <h2 className='section__title'>My previous projects</h2>
            <span className='section__subtitle'>Some of my previous works</span>
            <div className='portifolio__container container swiper-container'>
                <Carousel useKeyboardArrows axis='horizontal' swipeable>
                    <div className='portifolio__content grid'>
                        <img src={Telemedicine} alt='Telemedicine' className='portifolio__img' />
                        <div className='portifolio__data'>
                            <h3 className='portifolio__title'>Telemedicine application for baby care</h3>
                            <p className='portifolio description'>Telemedicine mobile application
                                it helps patients in remote area to communicate with specialized doctors with text chat and video call
                                using their smartphone. it has a chated to it which is used by patients to get medical
                                information. Tech stacks I used: Flutter(dart), Nodejs, MongoDB, python</p>
                            {/* <a className='button button--flex button--small portifolio__button' href='#'>Demo <i className="uil uil-arrow-right button__icon"></i></a> */}
                        </div>
                    </div>
                    <div className='portifolio__content grid'>
                        <img src={commerce} alt='Telemedicine' className='portifolio__img' />
                        <div className='portifolio__data'>
                            <h3 className='portifolio__title'>Gadoshop web application</h3>
                            <p className='portifolio description'>A full-fledged E-commerce web application
                            </p>
                            <a className='button button--flex button--small portifolio__button' href='https://gado-ecommerce.herokuapp.com/' rel="noreferrer" target="_blank">Check it <i className="uil uil-arrow-right button__icon"></i></a>
                        </div>
                    </div>

                    <div className='portifolio__content grid'>
                        <img src={School} alt='Telemedicine' className='portifolio__img' />
                        <div className='portifolio__data'>
                            <h3 className='portifolio__title'>Web based school management system</h3>
                            <p className='portifolio description'>A full-fledged website for school management with the following functionality:<br />
                                - student and teacher registration<br />
                                - assigning teachers to class<br />
                                - ranking<br />
                                - attendance management<br />
                                - student report generation<br />
                                - transcript management</p>
                            <a className='button button--flex button--small portifolio__button' href='#'>View it <i className="uil uil-arrow-right button__icon"></i></a>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Projects
