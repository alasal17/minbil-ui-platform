// src/components/Features.js
import React from 'react';
import '../../styles/Features.css';
import easyBookingImage from '../../assets/easy-booking.webp'; // Placeholder for the generated image
import optimizedForWorkshops from '../../assets/optimized-for-workshops.jpeg'; // Placeholder for the generated image
import vehicleHistory from '../../assets/vehicle-history.jpg'; // Placeholder for the generated image

const Features = () => {
    return (
        <div className="features">
            <h2>Hvorfor velge MinBil?</h2>
            <div className="features__grid">
                <div className="feature-item">
                    <img src={easyBookingImage} alt="Enkel timebestilling" className="feature-image" />
                    <h3>Enkel timebestilling</h3>
                    <p>MinBil tilbyr et intuitivt bookingsystem som gjør det enkelt for verksteder å planlegge tjenester. Ikke mer telefoner eller køer – bestill tjenester med noen få klikk, og administrer kommende avtaler i ett system.</p>
                </div>
                <div className="feature-item">
                    <img src={vehicleHistory} alt="Kjøretøyhistorikk" className="feature-image" />
                    <h3>Kjøretøyhistorikk</h3>
                    <p>Hold oversikt over alle servicer, reparasjoner og inspeksjoner dine kunders kjøretøy har gjennomgått. MinBil opprettholder en komplett og lett tilgjengelig historikk som hjelper deg med fremtidige tjenester og oppfølging.</p>
                </div>
                <div className="feature-item">
                    <img src={optimizedForWorkshops} alt="Optimalisert for verksteder" className="feature-image" />
                    <h3>Optimalisert for verksteder</h3>
                    <p>MinBil gir verksteder en fullt integrert plattform for å administrere tjenester, kundedata og avtaler. Fokuser på å levere god service, mens systemet tar seg av planlegging, varslinger og kundeadministrasjon.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
