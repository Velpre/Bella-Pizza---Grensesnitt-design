import React from "react";
/* Css */
import "../css/Information.css";
/* MUI */
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
/* Images */
import PizzaImage from "../images/pizza11.jpg";
import PastaImage from "../images/spageti1.jpg";
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
  }, [inView]);
  return (
    <div className="information-section">
      <motion.div animate={animation} ref={ref}>
        <Grid className="information-container" container>
          <Grid spacing={3} item container className="food-container">
            <Grid item xs={10} md={5}>
              <img id="food-image" src={PizzaImage} alt={"pizza"} />
            </Grid>
            <Grid item xs={10} md={5}>
              <Typography className="information-text">
                Den moderne pizzaen stammer fra Napoli, der flatt brød først ble
                dekket med tomatsaus og andre ingredienser, som ost, og bakt i
                vedfyrt ovn. Med utvandringen fra Italia på slutten av
                1800-tallet, til steder som New York i USA, São Paulo i Brasil,
                og ikke minst Norge.
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

          <Grid spacing={3} item container className="food-container">
            <Grid item item xs={10} md={5} order={{ xs: 1, md: 2 }}>
              <img id="food-image" src={PastaImage} alt={"Pasta"} />
            </Grid>
            <Grid item xs={10} md={5} order={{ xs: 2, md: 1 }}>
              <Typography className="information-text">
                Ifølge myten var det Marco Polo som førte pastaen fra Kina til
                Italia, men på den tiden hadde italienerne spist både makaroni
                og lasagne i lang tid. Andre eventyrlystne reiste ut og tok
                oppskriftene sine med seg – og gjorde pasta til en av verdens
                mest populære retter.
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
