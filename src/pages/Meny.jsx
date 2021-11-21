import React, { useState } from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { UserContext } from '../App'
import { useContext } from "react";

import PizzaList from "../components/PizzaList";



function Meny() {
    const { value, setValue } = useContext(UserContext);

    return (
        <>
            <div style={{ backgroundColor: "#6b5b95" }}>
                <Navbar />
                <Hero />
                <PizzaList />
            </div>
        </>
    );
}

export default Meny;