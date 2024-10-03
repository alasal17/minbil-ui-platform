// src/components/Dashboard/Navbar.js
import React, { useState, useEffect } from 'react';
import '../../styles/NavbarDashboard.css';
import profilePicture from '../../assets/profile-picture.jpg';
const Navbar = ({ toggleSidebar }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleProfileClick = () => {
        setShowDropdown(!showDropdown);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.profile')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <button className="hamburger-btn" onClick={toggleSidebar}>
                    &#9776;
                </button>
            </div>
            <div className="navbar__right">
                <div className="profile" onClick={handleProfileClick}>
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className="profile__image"
                    />
                    {showDropdown && (
                        <ul className="dropdown-menu">
                            <li>Innstillinger</li>
                            <li>Logg ut</li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
