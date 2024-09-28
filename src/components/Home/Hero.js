// src/components/Hero.js
import React, { useState } from "react";
import '../../styles/Hero.css';
import ContactPopup from './ContactPopup';

const Hero = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="hero">
            <div className="hero__content">
                <h1>Effektiv administrasjon for bilverksteder</h1>
                <p>MinBil CRM hjelper bilverksteder med å administrere kunder, tjenester, og avtaler på en enkel og effektiv måte. Med en digital plattform kan verksteder optimalisere driften og tilby bedre kundeservice.</p>
                <button className="hero__cta" onClick={() => setShowContact(true)}>Kontakt oss</button>
            </div>
            {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
        </div>
    );
}

export default Hero;
