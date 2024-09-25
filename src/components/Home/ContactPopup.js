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

  return (
    <div className="contact-popup">
      <div className="contact-popup__content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">Message sent successfully!</p>}
          <button type="submit" className="contact-btn">Send Message</button>
          <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
