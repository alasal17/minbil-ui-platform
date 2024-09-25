// src/components/Features.js
import React from 'react';
import '../../styles/Features.css';
import easyBookingImage from '../../assets/easy-booking.webp'; // Placeholder for the generated image
import optimizedForWorkshops from '../../assets/optimized-for-workshops.jpeg'; // Placeholder for the generated image
import vehicleHistory from '../../assets/vehicle-history.jpg'; // Placeholder for the generated image
const Features = () => {
    return (
        <div className="features">
            <h2>Why Choose MinBil?</h2>
            <div className="features__grid">
                <div className="feature-item">
                    <img src={easyBookingImage} alt="Easy Booking" className="feature-image" />
                    <h3>Easy Booking</h3>
                    <p>MinBil offers an intuitive booking system that allows users to quickly schedule services with their preferred workshops. No more hassle with phone calls or waiting in queues – book with a few clicks, and manage all your upcoming appointments in one place.</p>
                </div>
                <div className="feature-item">
                    <img src={vehicleHistory} alt="Vehicle History" className="feature-image" />
                    <h3>Vehicle History</h3>
                    <p>Keep track of every service, repair, and inspection your vehicle has gone through. MinBil maintains a complete and easily accessible vehicle history, ensuring you always have the information you need for future services or when selling your car.</p>
                </div>
                <div className="feature-item">
                    <img src={optimizedForWorkshops} alt="Optimized for Workshops" className="feature-image" />
                    <h3>Optimized for Workshops</h3>
                    <p>MinBil provides workshops with a fully integrated platform to manage services, customer data, and appointments. Workshops can focus on delivering excellent service while the platform takes care of scheduling, notifications, and customer management.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
