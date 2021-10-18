import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss';

const Navbar = () => {
    return (
        <nav  className= 'navbar'>
            <div className= 'navbar-links'>
                <ul>
                    <Link to= '/'>
                    <li>about</li>
                    </Link>
                    <Link to ='/projects'>
                    <li>projects</li>
                    </Link>
                    <Link to= '/resume'>
                    <li>jobs & resume</li>
                    </Link>
                    <Link to= '/contact'>
                    <li>contact</li>
                    </Link>
                </ul> 
            </div>
        </nav>
    )
}

export default Navbar
