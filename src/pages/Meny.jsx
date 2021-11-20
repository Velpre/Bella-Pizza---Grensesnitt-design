import React, { useState } from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { UserContext } from '../App'
import { useContext } from "react";

import ProductCard from "./Cards/productCard";
import Card from "./Cards/productCard";



function Meny() {
    const { value, setValue } = useContext(UserContext);

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