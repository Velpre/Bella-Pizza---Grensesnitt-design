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
}));

export default function Hero() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <div className="btn-div">
        <div>
          <Button variant="contained" color="primary" size="large">
            TAKEAWAY
          </Button>
        </div>
        <div>
          <Button variant="contained" size="large" color="primary" href="/meny">
            BESTILL BORD
          </Button>
        </div>
      </div>
    </div>
  );
}
