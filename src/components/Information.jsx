import React from "react";
/* Css */
import "../css/Information.css";
/* MUI */
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
/* Images */
import PizzaImage from "../images/pizzaoptions.jpg";
import PastaImage from "../images/pastaoptions.jpg";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
/* Hooks */
import { useInView } from "react-hook-inview";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
/* Animation framer */
import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";

export default function Information() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    unobserveOnEnter: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { duration: 1.5 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  });
  return (
    <div className="information-section">
      <motion.div animate={animation} ref={ref}>
        <Grid className="information-container" container>
          <Grid item container className="food-container">
            <Grid item xs={10} md={5}>
              <img id="food-image" src={PizzaImage} alt={"pizza"} />
            </Grid>
            <Grid item xs={10} md={5}>
              <Typography variant="subtitle1" className="information-text">
                Lorem Ipsum isindustry. Lorem Ipsum has been the industry's
                standard dummy. Lorem Ipsum has been the industry's standard
                dummy.
              </Typography>
              <Button
                id="information-btn"
                variant="contained"
                endIcon={<ArrowIcon />}
                size="large"
                component={NavHashLink}
                to="/meny#pizza"
              >
                Pizza
              </Button>
            </Grid>
          </Grid>

          <Grid item container className="food-container">
            <Grid item item xs={10} md={5} order={{ xs: 1, md: 2 }}>
              <img id="food-image" src={PastaImage} alt={"Pasta"} />
            </Grid>
            <Grid item xs={10} md={5} order={{ xs: 2, md: 1 }}>
              <Typography variant="subtitle1" className="information-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
                Lorem Ipsum has been the industry's standard dummy.
              </Typography>
              <Button
                id="information-btn"
                variant="contained"
                endIcon={<ArrowIcon />}
                size="large"
                component={NavHashLink}
                to="/meny#pasta"
              >
                Pasta
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
}
