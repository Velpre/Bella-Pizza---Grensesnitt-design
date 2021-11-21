import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import headerImage from "../images/hero-image.jpeg";
import "../css/Hero.css";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import BookTable from "./BookTable";
import { Link } from "react-router-dom";

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

  return (
    <div className={classes.root}>
      <div className="btn-div">
        <div>
          <Button
            id="btn-hero"
            className="first-btn-hero"
            variant="contained"
            endIcon={<ArrowIcon />}
            size="large"
            component={Link}
            to="/meny"
          >
            TAKEAWAY
          </Button>
        </div>
        <div>
          <Button
            id="btn-hero"
            endIcon={<ArrowIcon />}
            variant="contained"
            size="small"
          >
            <BookTable></BookTable>
          </Button>
        </div>
      </div>
    </div>
  );
}
