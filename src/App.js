import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";



function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <Navbar />
        <Hero />
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
