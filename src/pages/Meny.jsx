import React from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


function Meny() {
    return (
        <>
            <Navbar />
            <Hero />

            <h1 style={{
                textAlign: "center"
            }}>Deres kode går hit</h1>
        </>
    );
}

export default Meny;