import React from "react";
import Footer from "./Footer";
import BookTable from "./BookTable";
import { Grid } from "@mui/material";
import "../css/ContactUs.css";

export default function ContactUs(props) {
  return (
    <Grid container className="contact-section">
      <Grid container item xs={12} justifyContent="center">
        <Grid item>
          <h1>KONTAKT</h1>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        sm={6}
        direction="column"
        justifyContent="space-evenly"
      >
        <Grid item>
          <h3>ADRESSE</h3>
          <p>Romaveien 12</p>
          <p>0368 Oslo</p>
        </Grid>
        <Grid item>
          <h3>TELEFON</h3>
          <p>21 21 21 00</p>
        </Grid>
        <Grid item>
          <h3>E-MAIL</h3>
          <a href="mailto:post@bellapizza.com">post@bellapizza.no</a>
        </Grid>
        <Grid item>
          <BookTable></BookTable>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        sm={6}
        direction="column"
        justifyContent="space-evenly"
      >
        <Grid item>
          <h3>ÅPNINGSTIDER</h3>
          <p>Mandag-Torsdag</p>
          <p>11:00 - 00:00</p>
          <p>Lørdag-Søndag</p>
          <p>16:00 - 00:00</p>
        </Grid>
        <Grid item>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16003.204024194303!2d10.739215484427733!3d59.90890028754498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e8a1dd5d001%3A0xcdf1706e3a58f28c!2sBella%20Bambina%20Ristorante!5e0!3m2!1sno!2sno!4v1637335043493!5m2!1sno!2sno"
            width="300"
            height="200"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
}
