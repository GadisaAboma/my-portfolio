import React from 'react'

function Services() {

    const showMore = (event) => {
        const modalButtons = document.querySelectorAll('.services__button');
        const modalViews = document.querySelectorAll('.services__modal');

        modalButtons.forEach((e, index) => {
            if (e === event.target) {
                modalViews[index].classList.add('active-modal')
            }
        })
    }

    const closeModal = (event) => {
        const modalCloses = document.querySelectorAll('.services__modal-close');
        const modalViews = document.querySelectorAll('.services__modal');
        modalCloses.forEach((e, index) => {
            if (e === event.target) {
                modalViews[index].classList.remove('active-modal')
            }
        })
    }

    return (
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What i offer</span>
            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className='services__title'>Web Development</h3>
                    </div>
                    <span onClick={showMore} className='button button--flex button--link button-small services__button'>
                        View more
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className='services__modal'>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'>Web Development</h4>
                            <i onClick={closeModal} className="uil uil-times services__modal-close"></i>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I develop responsive users interfaces</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Web page development</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>i develop reusable ui components</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Backend development</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='services__content'>
                    <div>
                    <i className="uil uil-apps  services__icon"></i>
                        {/* <i className="uil uil-web-grid services__icon"></i> */}
                        <h3 className='services__title'>App Development</h3>
                    </div>
                    <span onClick={showMore} className='button button--flex button--link button-small services__button'>
                        View more
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className='services__modal'>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'>App development</h4>
                            <i onClick={closeModal} className="uil uil-times services__modal-close"></i>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I develop the user interface</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>andoid and ios app development</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Mobile application development</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Backend development</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
