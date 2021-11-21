import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Information from "../components/Information";
import ContactUs from "../components/ContactUs";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Information />
      <ContactUs />
    </>
  );
};

export default Home;
