import React from "react";

import Navbar from "../components/Navbar";
import DisplayMenu from "../components/DisplayMenu";
import Footer from "../components/Footer";


function Meny() {
  return (
    <>
      <div style={{align:'center', justifyContent:'center'}}>
        <DisplayMenu />
        <Footer/>
      </div>
    </>
  );
}

export default Meny;
