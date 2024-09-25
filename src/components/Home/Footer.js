// src/components/Footer.js
import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 MinBil. All rights reserved.</p>
            <div className="footer__links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms & Conditions</a>
            </div>
        </footer>
    );
}

export default Footer;
