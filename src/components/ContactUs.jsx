import React from "react";
import Footer from "./Footer";
import BookTable from "./BookTable";
import { Grid } from "@mui/material";
import "../style-first-page.css";

export default function ContactUs(props) {
  return (
    <div className="contact-section">
      <h1>Kontakt oss</h1>
      <Grid container direction="row">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h3>E-mail</h3>
            <p>post@bellapizza</p>
          </Grid>
          <Grid item>
            <h3>Telefon</h3>
            <p>21 21 21 00</p>
          </Grid>
          <Grid item>
            <h3>Adresse</h3>
            <p>Romaveien 12</p>
            <p>0368 Oslo</p>
          </Grid>
          <Grid item>
            <BookTable></BookTable>
          </Grid>
        </Grid>

        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h3>Åpningstider</h3>
            <p>Mandag-Torsdag</p>
            <p>11:00 - 00:00</p>
            <p>Lørdag-Søndag</p>
            <p>16:00 - 00:00</p>
          </Grid>
          <Grid item>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.2485322165871!2d10.71228261623299!3d59.928018081872324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dda8d0e2f57%3A0xe341c8f7f266f75e!2sKirkeveien%2057%2C%200368%20Oslo!5e0!3m2!1sno!2sno!4v1615913272217!5m2!1sno!2sno"
              allowfullscreen=""
              loa
              ding="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Grid>

      <Footer></Footer>
    </div>
  );
}
