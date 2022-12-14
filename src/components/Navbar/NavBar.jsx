import React from 'react'
import './navbar.scss';

/**
 * Generate navigation bar component.
 * @component
 * @param { * } props
 * @return { HTMLElement }
 */
export default function NavBar() {

    return (
        <div className="navbar">
            <ul className="navbar__list">
                <li>
                    <a href="/" className="navbar__list__option">
                        <img alt="logo de SportSee" src="/logo_sportsee.png" className="navbar__image"></img>
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        className="navbar__list__option"
                    >Accueil</a>
                </li>
                <li>
                    <a
                        href="/about"
                        className="navbar__list__option"
                    >Profil</a>
                </li>
                <li>
                    <a
                        href="/"
                        className="navbar__list__option"
                    >Reglages</a>
                </li>
                <li>
                    <a
                        href="/about"
                        className="navbar__list__option"
                    >Communaut√©</a>
                </li>
            </ul>
        </div>
    )
}