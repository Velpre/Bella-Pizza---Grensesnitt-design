import React from "react";
/* Components */
import Footer from "./Footer";
import BookTable from "./BookTable";
/* CSS */
import "../css/ContactUs.css";
/* MUI */
import { Grid, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@material-ui/core";

export default function ContactUs(props) {
  return (
    <Grid container className="contact-section" id="kontakt-oss">
      <Grid container item xs={12} justifyContent="center">
        <Grid item>
          <Typography variant="h1">Kontakt</Typography>
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
          <h2>
            <HomeIcon className="icone-contact-us" /> Adresse
          </h2>
          <p>Romaveien 12</p>
          <p>0368 Oslo</p>
        </Grid>
        <Grid item>
          <h2>
            <PhoneIcon className="icone-contact-us" /> Telefon
          </h2>
          <p>21 21 21 00</p>
        </Grid>
        <Grid item>
          <h2>
            <EmailIcon className="icone-contact-us" /> E-Mail
          </h2>
          <a href="mailto:post@bellapizza.com">post@bellapizza.no</a>
        </Grid>
        <Grid item order={{ xs: 1 }}>
          <Button
            id="contact-bookTable-btn"
            endIcon={<ArrowIcon />}
            variant="contained"
            size="large"
          >
            <BookTable></BookTable>
          </Button>
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
          <h2>
            <WatchLaterIcon className="icone-contact-us" /> ÅPNINGSTIDER
          </h2>
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
      <Footer></Footer>
    </Grid>
  );
}
