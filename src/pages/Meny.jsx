import React, { useState } from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { UserContext } from '../App'
import { useContext } from "react";

import PizzaList from "../components/PizzaList";
import DisplayMenu from "../components/DisplayMenu"
import TemporaryDrawer from "../components/DrawerMobile"
import Footer from '../components/Footer';



function Meny() {
    const { value, setValue } = useContext(UserContext);
    
    


    return (
        <>
            <div style={{ backgroundColor: "#c0c0c01a" }}>
                <Navbar />
                <DisplayMenu />
            </div>
        </>
    );
}

export default Meny;