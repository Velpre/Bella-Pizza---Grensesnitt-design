import React from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ContactUs />
            <Footer />
        </>
    );
}

export default Home;