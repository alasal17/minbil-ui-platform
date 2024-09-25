// src/components/Navbar.js
import React, { useState } from 'react';
import '../../styles/Navbar.css';
import SignupPopup from './SignupPopup';
import LoginPopup from './LoginPopup';

const Navbar = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__logo">MinBil</div>
            <ul className="navbar__links">
                <li><button className="login-btn" onClick={() => setShowLogin(true)}>Login</button></li>
                <li><button className="signup-btn" onClick={() => setShowSignup(true)}>Signup</button></li>
            </ul>
            {showSignup && <SignupPopup onClose={() => setShowSignup(false)} />}
            {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
        </nav>
    );
}

export default Navbar;
