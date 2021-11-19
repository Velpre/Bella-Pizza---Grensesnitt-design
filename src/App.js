import React, { useState } from "react";
import Home from "./pages/Home";
import Meny from "./pages/Meny";

import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import { createContext } from "react";

export const UserContext = createContext();

function App() {

  const [value, setValue] = useState(UserContext)

  const defaultValue = {

    products: [
      { id: "1", title: "Italian Pizza", price: 229 },
    ],
    cart: [],

    addProductToCart: product => { }, // for later
  }




  return (
    <>
      <Navbar />
      <Hero />
      <ContactUs />
    </>
  );
}

export default App;
