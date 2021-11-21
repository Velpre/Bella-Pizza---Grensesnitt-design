import React from "react";

import Navbar from "../components/Navbar";
import DisplayMenu from "../components/DisplayMenu";
import Footer from "../components/Footer";

function Meny() {
  return (
    <>
      <div style={{ backgroundColor: "#c0c0c01a" }}>
        <Navbar />
        <DisplayMenu />
        <Footer />
      </div>
    </>
  );
}

export default Meny;
