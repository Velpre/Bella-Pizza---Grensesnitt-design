import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Information from "./components/Information";
import Footer from "./components/Footer";


function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <AboutUs />
        <Information />
        <ContactUs />
        <Footer />
    </>
  )
}

export default App;
