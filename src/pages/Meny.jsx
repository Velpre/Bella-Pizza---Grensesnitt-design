import React from "react";

import Navbar from "../components/Navbar";
import { UserContext } from "../App";
import { useContext } from "react";
import DisplayMenu from "../components/DisplayMenu"




function Meny() {

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
