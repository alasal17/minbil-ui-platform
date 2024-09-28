// src/components/LoginPopup.js
import React, { useState } from "react";
import { login } from "../../firebase";
import { useNavigate } from "react-router-dom";
import '../../styles/LoginPopup.css';

const LoginPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard"); // Redirect to Dashboard on successful login
      setError(null);
    } catch (err) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError("Invalid email or password.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

   // Close popup when user clicks outside the content
   const handleClickOutside = (e) => {
    if (e.target.classList.contains('login-popup')) {
      onClose();
    }
  };

  return (
    <div className="login-popup" onClick={handleClickOutside}>
      <div className="login-popup__content">
        <h2>Logg inn</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Passord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn">Logg inn</button>
          <button type="button" className="cancel-btn" onClick={onClose}>Avbryt</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
