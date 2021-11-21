import React from "react";
import { Email, Facebook, Instagram } from "@mui/icons-material";
import { Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <Grid
      container
      item
      className="footer-container"
      justifyContent="center"
      alignItems="flex-end"
      spacing={10}
    >
      <Grid item>
        <Link className="icon-footer" href="mailto:post@bellapizza.com">
          <Email fontSize="large"></Email>
        </Link>
      </Grid>
      <Grid item>
        <Link
          className="icon-footer"
          href="https://www.facebook.com/BellaBambinaRistorante/"
        >
          <Facebook fontSize="large"></Facebook>
        </Link>
      </Grid>
      <Grid item>
        <Link
          className="icon-footer"
          href="https://www.instagram.com/bellabambina_oslo/"
        >
          <Instagram fontSize="large"></Instagram>
        </Link>
      </Grid>
    </Grid>
  );
}
