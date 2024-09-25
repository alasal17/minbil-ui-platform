// src/components/Home.js
import React from 'react';
import Navbar from '../components/Home/Navbar';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Footer from '../components/Home/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </>
    );
}

export default Home;
