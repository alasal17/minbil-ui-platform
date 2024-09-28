// src/components/ContactPopup.js
import React, { useState } from "react";
import '../../styles/ContactPopup.css';

const ContactPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs here
    if (!email || !phone || !title || !message) {
      setError("All fields are required.");
      return;
    }

    // Simulate sending contact form data (You can integrate it with your backend)
    console.log("Contact Form Submitted", { email, phone, title, message });
    setSuccess(true);
    setError(null);
    
    // Close popup after success
    setTimeout(() => {
      onClose();
    }, 2000);
  };
// Close popup when user clicks outside the content
const handleClickOutside = (e) => {
  if (e.target.classList.contains('contact-popup')) {
    onClose();
  }
};
  return (
    <div className="contact-popup" onClick={handleClickOutside}>
      <div className="contact-popup__content">
        <h2>Kontakt oss</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Tittel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Din melding"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">Message sent successfully!</p>}
          <button type="submit" className="contact-btn">Send</button>
          <button type="button" className="cancel-btn" onClick={onClose}>Avbryt</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
