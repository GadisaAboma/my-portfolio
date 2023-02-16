import React from 'react'

function Skills() {

    function toggleSkills(e) {
        const skillsContent = document.getElementsByClassName('skills__content')
        let itemClass = e.target.parentNode.parentNode.className
        for (var i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close'
        }
        if (itemClass === 'skills__content skills__close') {
            e.target.parentNode.parentNode.className = 'skills__content skills__open'
        }

    }

    return (
        <section className='section skills' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className='section__subtitle'>my technical level</span>
            <div className='skills__container container grid'>
                <div>
                    <div className='skills__content skills__open'>
                        <div className='skills__header'>
                            <i className="uil uil-brackets-curly skills__icon" ></i>
                            <div>
                                <h1 className='skills__titles'>Frontend developer</h1>
                                <span className='skills__subtitle'>More than 2 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow" onClick={toggleSkills}></i>
                        </div>
                        <div className='skills__list grid'>
                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>HTML5</h3>
                                    <span className='skills__number'>100%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__html'></span>
                                </div>
                            </div>
                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>CSS3</h3>
                                    <span className='skills__number'>100%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__css'></span>
                                </div>
                            </div>
                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>Flutter</h3>
                                    <span className='skills__number'>96%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__flutter'></span>
                                </div>
                            </div>

                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>JavaScript</h3>
                                    <span className='skills__number'>98%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__js'></span>
                                </div>
                            </div>
                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>React</h3>
                                    <span className='skills__number'>96%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__react'></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='skills__content skills__close'>
                        <div className='skills__header'>
                            <i className="uil uil-server-network skills__icon"></i>
                            <div>
                                <h1 className='skills__titles'>Backend developer</h1>
                                <span className='skills__subtitle'>More than 2 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow" onClick={toggleSkills}></i>
                        </div>
                        <div className='skills__list grid'>
                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>java</h3>
                                    <span className='skills__number'>95%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__java'></span>
                                </div>
                            </div>
                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>Node Js</h3>
                                    <span className='skills__number'>98%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__node'></span>
                                </div>
                            </div>
                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>firebase</h3>
                                    <span className='skills__number'>95%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills__firebase'></span>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Skills
