import React, { useState } from "react";

import Navbar from "../components/Navbar";
import { UserContext } from "../App";
import { useContext } from "react";

import DisplayMenu from "../components/DisplayMenu";
import Footer from "../components/Footer";

function Meny() {
  const { value, setValue } = useContext(UserContext);

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
