import React from "react";
import Footer from "./Footer";
import BookTable from "./BookTable";
import "../style-first-page.css";

export default function ContactUs(props) {
  return (
    <div className="contact-section">
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
          <BookTable></BookTable>
        </div>

        <div>
          <div>
            <h3>Åpningstider</h3>
            <p>Mandag-Torsdag</p>
            <p>11:00 - 00:00</p>
            <p>Lørdag-Søndag</p>
            <p>16:00 - 00:00</p>
          </div>

          <iframe
            className="frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.2485322165871!2d10.71228261623299!3d59.928018081872324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dda8d0e2f57%3A0xe341c8f7f266f75e!2sKirkeveien%2057%2C%200368%20Oslo!5e0!3m2!1sno!2sno!4v1615913272217!5m2!1sno!2sno"
            style={{ border: 0, borderRadius: 10 }}
            allowfullscreen=""
            loa
            ding="lazy"
          ></iframe>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
