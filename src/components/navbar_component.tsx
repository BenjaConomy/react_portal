import React from 'react';
import logo from '../assets/logo.png';

const NavbarComponent = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" style={{ width: '100px' }} />
        </nav>
    );
};

export default NavbarComponent;
