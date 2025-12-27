import { useState } from 'react';
import './css/Navbar.css';

const Navbar = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <a href="#home" className="nav-brand" onClick={closeMenu}>
                        <span className="brand-text">Portfolio</span>
                    </a>

                    <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                        <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
                        <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
                        <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
                    </ul>

                    <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
