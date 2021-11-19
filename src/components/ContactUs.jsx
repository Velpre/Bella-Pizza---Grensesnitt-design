import React,  {useRef, useEffect} from "react";
import { Email, Facebook, Instagram } from "@mui/icons-material";
import { display } from "@mui/system";
import "../css/ContactUs.css"

const ContactUs = (props) => {

   
  return (
    <div className="contact-section" id='kontakt-oss'>
      <h1>Kontakt oss</h1>
      <div className="contact-content">
        <div>
          <h3>E-mail</h3>
          <p>post@bellapizza</p>
          <h3 className="idem-header-contact">Telefon</h3>
          <p>21 21 21 00</p>
          <h3 className="idem-header-contact">Adresse</h3>
          <p>Romaveien 12</p>
          <p>0368 Oslo</p>
          <button>Modal</button>
        </div>

        <div>
          <div>
            <h3>Åpningstider</h3>
            <p>Mandag-Torsdag</p>
            <p>11:00 - 00:00</p>
            <p>Lørdag-Søndag</p>
            <p>16:00 - 00:00</p>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ContactUs;
