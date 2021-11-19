import React from "react";
import Footer from "./Footer";
import BookTable from "./BookTable";
import { Grid } from "@mui/material";
import "../style-first-page.css";

export default function ContactUs(props) {
  return (
    <Grid container className="contact-section">
      <Grid container item xs={12} justifyContent="center">
        <Grid item>
          <h1>Kontakt oss</h1>
        </Grid>
      </Grid>

      <Grid
        item
        spacing={4}
        xs={12}
        sm={6}
        container
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <h3>E-mail</h3>
          <a href="mailto:post@bellapizza.com">post@bellapizza.no</a>
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

      <Grid
        item
        spacing={8}
        xs={12}
        sm={6}
        container
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <h3>Åpningstider</h3>
          <p>Mandag-Torsdag</p>
          <p>11:00 - 00:00</p>
          <p>Lørdag-Søndag</p>
          <p>16:00 - 00:00</p>
        </Grid>
        <Grid item>
          <p>Her kommer kart</p>
          <p>Her kommer kart</p>
          <p>Her kommer kart</p>
          <p>Her kommer kart</p>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        alignItems="flex-end"
        justifyContent="center"
      >
        <Grid item>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Grid>
  );
}

