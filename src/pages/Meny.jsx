import React, { useState } from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { UserContext } from '../App'
import { useContext } from "react";

import PizzaList from "../components/PizzaList";
import DisplayMenu from "../components/DisplayMenu"
import Footer from '../components/Footer';



function Meny() {
    const { value, setValue } = useContext(UserContext);
    
    


    return (
        <>
            <DisplayMenu />
        </>
    );
}

export default Meny;