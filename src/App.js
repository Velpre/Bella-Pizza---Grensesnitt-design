import React, { useState, useMemo } from "react";
import Home from "./pages/Home";
import Meny from "./pages/Meny";

import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import { createContext } from "react";

export const UserContext = createContext(null);

function App() {

  const [products, setProducts] = useState(0)

  const providerValue = useMemo(() => ({ products, setProducts }), [products, setProducts])


  return (
    <>
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meny" element={<Meny />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;