import React, { useState } from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { UserContext } from '../App'
import { useContext } from "react";

import PizzaList from "../components/PizzaList";
import DisplayMenu from "../components/DisplayMenu"



function Meny() {
    const { value, setValue } = useContext(UserContext);

    return (
        <>
            <div style={{ backgroundColor: "#c0c0c01a" }}>
                <Navbar />
                <Hero />
                <DisplayMenu />
            </div>
        </>
    );
}

export default Meny;