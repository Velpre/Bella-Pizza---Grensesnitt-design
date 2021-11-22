import React from "react";
/* Components */
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Information from "../components/Information";
import ContactUs from "../components/ContactUs";


const Home = (props) => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Information />
      <ContactUs />
    </>
  );
};

export default Home;
