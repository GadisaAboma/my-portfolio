import React from 'react'

function Qualification() {
    return (
        <section className='qualification section'>
            {/* <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personal journey</span> */}
            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div className='qualification__button button--flex'>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    {/* <div className='qualification__button button--flex'>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div> */}
                    <div className='qualification__sections'>
                        <div className='qualification__content'>
                            <div className='qualification__data'>
                                <div>
                                    <h3 className='qualification__title'>Software Engineering</h3>
                                    <span className='qualification__subtitle'>Jimma University</span>
                                    <div className='qualifaction__calender'>
                                        <i className="uil uil-calendar-alt"></i>2018 - 2022
                                    </div>
                                </div>
                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
