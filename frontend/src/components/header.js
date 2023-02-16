import React, { useEffect } from 'react'

const Header = () => {

    let themeButton, darkTheme, iconTheme

    useEffect(() => {
        themeButton = document.getElementById('theme-button')
        darkTheme = 'dark-theme'
        iconTheme = 'uil-sun'

        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
            themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
        }
    }, [])

    const showMenu = () => {
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.add('show-menu')
    }

    const hideMenu = () => {
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }

    const changeTheme = () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem('selected-theme', currentTheme())
        localStorage.setItem('selected-icon', currentIcon())

    }

    const currentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const currentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-soon'

    return (
        <header className='header' id="header">
            <nav className='nav container'>
                <a href='#home' className='nav__logo'>Gadisa</a>
                <div className='nav__menu' id='nav-menu'>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' className='nav__link'>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills' className='nav__link'>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#services' className='nav__link'>
                                <i className="uil uil-briefcase nav__icon"></i>Services
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#portifolio' className='nav__link'>
                                <i className="uil uil-scenery nav__icon"></i>My projects
                            </a>
                        </li>
                        {/* <li className='nav__item'>
                            <a href='#contact' className='nav__link'>
                                <i className="uil uil-message nav__icon"></i>Contact me
                            </a>
                        </li> */}
                    </ul>
                    <i onClick={hideMenu} className="uil uil-times nav__close" id='nav-close'></i>
                </div>
                <div className='nav__btns'>
                    <i onClick={changeTheme} className="uil uil-moon change-theme" id='theme-button'></i>
                    <div onClick={showMenu} className='nav__toggle' id='nav-toggle'>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header
