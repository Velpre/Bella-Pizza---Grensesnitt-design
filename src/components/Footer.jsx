import React from "react";
import { Email, Facebook, Instagram } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "../css/ContactUs.css";

export default function Footer() {
  function test() {
    alert();
  }
  return (
    <Grid
      container
      item
      className="footer-container"
      justifyContent="center"
      alignItems="flex-end"
      spacing={15}
    >
      <Grid item>
        <Email fontSize="large"></Email>
      </Grid>
      <Grid item>
        <Facebook fontSize="large"></Facebook>
      </Grid>
      <Grid item>
        <Instagram fontSize="large"></Instagram>
      </Grid>
    </Grid>
  );
}
