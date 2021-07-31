import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
            </div>
                <div className="list-wrapper">
                <img src="https://img.icons8.com/glyph-neue/64/000000/menu.png" alt="Menu-Bar" />

                  <img src="https://img.icons8.com/plumpy/24/000000/macos-close.png" alt="Menu-Cross" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/works">Works</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                </div>

            </div>

        </nav>
    )
}

export default NavBar
