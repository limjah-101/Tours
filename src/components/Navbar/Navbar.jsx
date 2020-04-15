import React from 'react';
import './navbar.scss';
import logo from '../../logo.svg';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="city tour companylogo"/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="/about" className="nav-link">About</a>
                </li>
                <li>
                    <a href="/tours" className="nav-link active">Tours</a>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;