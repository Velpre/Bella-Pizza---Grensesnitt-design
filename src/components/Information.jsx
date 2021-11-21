import React from "react";
import "../css/Information.css";
import { Grid, Typography, Button } from "@mui/material";
import PizzaImage from "../images/pizzaoptions.jpg";
import PastaImage from "../images/pastaoptions.jpg";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

export default function Information() {
  return (
    <Grid className="information-container" container>
      <Grid item container className="food-container">
        <Grid item xs={10} md={5}>
          <img id="food-image" src={PizzaImage} />
        </Grid>
        <Grid item xs={10} md={5}>
          <Typography className="information-text">
            Lorem Ipsum isindustry. Lorem Ipsum has been the industry's standard
            dummy. Lorem Ipsum has been the industry's standard dummy.
          </Typography>
          <Button
            id="information-btn"
            variant="contained"
            endIcon={<ArrowIcon />}
            size="large"
            component={Link}
            to="/meny"
          >
            Pizza
          </Button>
        </Grid>
      </Grid>

      <Grid item container className="food-container">
        <Grid item item xs={10} md={5} order={{ xs: 1, md: 2 }}>
          <img id="food-image" src={PastaImage} />
        </Grid>
        <Grid item xs={10} md={5} order={{ xs: 2, md: 1 }}>
          <Typography className="information-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy. Lorem
            Ipsum has been the industry's standard dummy.
          </Typography>
          <Button
            id="information-btn"
            variant="contained"
            endIcon={<ArrowIcon />}
            size="large"
            component={Link}
            to="/meny"
          >
            Pasta
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
