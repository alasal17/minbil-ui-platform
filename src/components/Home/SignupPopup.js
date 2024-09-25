// src/components/SignupPopup.js
import React, { useState } from "react";
import { signUp } from "../../firebase";
import '../../styles/SignupPopup.css';

const SignupPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUp(email, password);
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        onClose(); // Close the popup after a few seconds
      }, 2000);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError("The email is already in use.");
      } else {
        setError("An error occurred. Please try again.");
      }
      setSuccess(false);
    }
  };

  return (
    <div className="signup-popup">
      <div className="signup-popup__content">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          {success && <p className="success">Signup successful! Redirecting...</p>}
          <button type="submit" className="signup-btn">Signup</button>
          <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPopup;
