import React from "react";
import { Email, Facebook, Instagram } from "@mui/icons-material";
import { Grid } from "@mui/material";

export default function Footer() {
  function test() {
    alert();
  }
  return (
    <div>
      <Email fontSize="large"></Email>
      <Facebook fontSize="large"></Facebook>
      <Instagram fontSize="large"></Instagram>
    </div>
  );
}
