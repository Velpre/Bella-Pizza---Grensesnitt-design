import React, { useState, useMemo } from "react";
import Home from "./pages/Home";
import Meny from "./pages/Meny";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import { createContext } from "react";

export const UserContext = createContext(null);

/* Changing default value for primary secondary color */

const theme = createTheme({
  palette: {
    secondary: {
      main: "#2B6250",
    },
  },
});

function App() {
  const [products, setProducts] = useState([]);

  const providerValue = useMemo(
    () => ({ products, setProducts }),
    [products, setProducts]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={providerValue}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meny" element={<Meny />} />
          </Routes>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
