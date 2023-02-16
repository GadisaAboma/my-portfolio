import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__bg'>
                <div className='footer__container container grid'>
                    <div>
                        <h1 className='footer__title'>Gadisa</h1>
                        <span className='footer__subtitle'>Web and application developer</span>
                    </div>
                    <ul className='footer__links'>
                        <li>
                            <a href='#services' className='footer__link'>Services</a>
                        </li>
                        <li>
                            <a href='#portifolio' className='footer__link'>my projects</a>
                        </li>
                        <li>
                            <a href='#skills' className='footer__link'>skills</a>
                        </li>
                    </ul>
                    <div className='footer__socials'>
                        <a href='https://www.facebook.com/gadisa.aboma.7/' rel="noreferrer" target="_blank" className='footer__social'>
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href='https://t.me/Gado_A' rel="noreferrer" target="_blank" className='footer__social'>
                            <i className="uil uil-telegram-alt"></i>
                        </a>
                        <a href='https://www.instagram.com/gadisa_a/' rel="noreferrer" target="_blank" className='footer__social'>
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
                <p className='footer__copy'>&#169; Gado. All rigths reserved</p>
            </div>
        </footer>
    )
}

export default Footer
