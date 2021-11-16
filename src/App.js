import React from "react";

import Home from "./pages/Home";
import Meny from "./pages/Meny";

import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";



function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meny" element={<Meny />} />
        </Routes>
    </>
  )
}

export default App;
