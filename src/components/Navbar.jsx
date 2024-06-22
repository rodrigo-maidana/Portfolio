// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a className="navbar-link" href="#projects">Proyectos</a></li>
                <li className="navbar-item"><a className="navbar-link" href="#about">Sobre Mí</a></li>
                <li className="navbar-item"><a className="navbar-link" href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
