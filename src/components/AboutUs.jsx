import React from "react";
/* CSS */
import "../css/AboutUs.css";
/* MUI */
import { Button, Grid, Typography } from "@mui/material";
import RestaurantPhoto from "../images/restaurant.jpg";
import BookTable from "./BookTable";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
/* Hooks */
import { useInView } from "react-hook-inview";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
/* Animation framer */
import { motion } from "framer-motion";

export default function AboutUs() {
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
    <div className="about-us-section">
      <motion.div animate={animation} ref={ref}>
        <Grid className="about-us-container" container spacing={5} id="om-oss">
          <Grid item xs={9} md={4}>
            <h1>ITALIENSK I ÅNDEN</h1>
            <Typography className="about-us-txt">
              Vår kjærlighetsaffære med italiensk mat er langsiktig. I 1965
              visste en klok mann kalt Marco Rossi at pizza i Oslo kunne være
              bedre, og åpnet Pizzeria Bella i hjertet av byen. Du finner mange
              valgmuligheter, inkludert klassisk italiensk mat sammen med våre
              egne signaturretter.
            </Typography>

            <Button
              id="btn-reservation"
              endIcon={<ArrowIcon />}
              variant="contained"
              size="large"
            >
              <BookTable></BookTable>
            </Button>
          </Grid>

          <Grid item xs={10} md={5} className="about-us-image">
            <img id="restaurant-img" src={RestaurantPhoto} />
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
}
