import React, { useState } from "react";
import '../../styles/Hero.css';
import ContactPopup from './ContactPopup';
const Hero = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="hero">
            <div className="hero__content">
                <h1>Effortless car maintenance for owners and workshops</h1>
                <p>MinBil makes it easier for car owners to manage their vehicles and for workshops to optimize their operations.</p>
                <button className="hero__cta" onClick={() => setShowContact(true)}>Contact Us</button>
            </div>
            {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
        </div>
    );
}

export default Hero;