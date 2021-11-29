import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav  className= 'navbar'>
            <div className= 'navbar-links'>
                <Link to= '/'>
                <span>about</span>
                </Link>
                {/* <Link to ='/projects'>
                <span>projects</span>
                </Link> */}
                <Link to= '/resume'>
                <span>resume & jobs</span>
                </Link>
                <Link to= '/contact'>
                <span>contact</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
