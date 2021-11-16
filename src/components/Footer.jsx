import React from "react";
import { Email, Facebook, Instagram } from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function Footer() {
  function test() {
    alert();
  }
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <Email fontSize="large"></Email>
        <Facebook fontSize="large"></Facebook>
        <Instagram fontSize="large"></Instagram>
      </div>
    </div>
  );
}
