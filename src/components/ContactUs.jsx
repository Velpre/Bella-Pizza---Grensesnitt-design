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
          <Email></Email>
          <h3>E-mail</h3>
          <p>post@bellapizza</p>
          <h3>Telefon</h3>
          <p>21 21 21 00</p>
          <h3>Adresse</h3>
          <p>Romaveien 12</p>
          <p>0368 Oslo</p>
        </div>

        <div>
          <h3>Åpningstider</h3>
          <div>
            <p>Mandag-Torsdag</p>
            <p>11:00 - 00:00</p>
          </div>
          <div>
            <p>Lørdag-Søndag</p>
            <p>16:00 - 00:00</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;
