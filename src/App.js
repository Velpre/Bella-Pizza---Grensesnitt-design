import React, { useState, useMemo } from "react";
import Home from "./pages/Home";
import Meny from "./pages/Meny";

import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";



function App() {

  const [value, setValue] = useState(0)

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <>
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meny" element={<Meny />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App;
