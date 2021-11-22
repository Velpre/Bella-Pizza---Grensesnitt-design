import React from "react";
/* MUI */
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
/* Image */
import headerImage from "../images/hero1.jpg";
/* Css */
import "../css/Hero.css";
/* Components */
import BookTable from "./BookTable";

// Local style
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

  return (
    <div className={classes.root}>
      <div className="btn-div">
        <div>
          <Button
            id="btn-hero"
            className="first-btn-hero"
            variant="contained"
            size="large"
            component={Link}
            to="/meny"
          >
            TAKEAWAY
          </Button>
        </div>
        <div>
          <Button id="btn-hero" variant="contained" size="small">
            <BookTable></BookTable>
          </Button>
        </div>
      </div>
    </div>
  );
}
