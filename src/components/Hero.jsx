import React from "react";
import {
  Typography,
  Container,
  Button,
  ButtonGroup,
  Box,
  useMediaQuery,
  Grid,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import headerImage from "../images/hero-image.jpeg";
import "../css/Hero.css";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${headerImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },

  btnDiv: {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    width: "50%",
  },
}));

export default function Hero() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <div className={classes.btnDiv}>
        <div className="hero-btn">
          <Button variant="contained" color="primary" size="large">
            TAKEAWAY
          </Button>
        </div>
        <div className="hero-btn">
          <Button variant="contained" size="large" color="primary" href="/meny">
            BESTILL BORD
          </Button>
        </div>
      </div>
    </div>
  );
}
