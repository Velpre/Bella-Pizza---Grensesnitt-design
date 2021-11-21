import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import headerImage from "../images/hero-image.jpeg";
import "../css/Hero.css";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import BookTable from "./BookTable";

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
            variant="contained"
            endIcon={<ArrowIcon />}
            size="large"
          >
            TAKEAWAY
          </Button>
        </div>
        <div>
          <BookTable id="btn-hero"></BookTable>
        </div>
      </div>
    </div>
  );
}
