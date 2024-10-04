// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ServicesPage from './pages/ServicesPage'; // Import ServicesPage

const isLoggedIn = true; // This should come from your authentication logic

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
                <Route path="/services" element={isLoggedIn ? <ServicesPage /> : <Navigate to="/" />} /> {/* Add route for ServicesPage */}
            </Routes>
        </Router>
    );
}

export default App;