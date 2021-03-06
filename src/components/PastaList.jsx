/* Hooks */
import { useEffect } from "react";
import { useInView } from "react-hook-inview";
/* Component */
import ProductCard from "./ProductCard";
/* MUI */
import { Typography, Grid } from "@mui/material";
/* Framer animation */
import { useAnimation, motion } from "framer-motion";

function PastaList() {
  const [ref, inView] = useInView({});
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  const pastaList = [
    {
      id: 11,
      name: "Carbonara",
      productDescription: "Pasta, carbonarasaus, bacon, og parmesan",
      allergies: "Ingen",
      image: "https://i.imgur.com/TD7TfOE.jpg",
      productType: "Pasta",
      price: 189,
    },
    {
      id: 12,
      name: "Scampi",
      productDescription: "Pasta, scampi, ostesaus med hvitvin",
      allergies: "S",
      image: "https://i.imgur.com/Grh4x4s.jpg",
      productType: "Pasta",
      price: 189,
    },
    {
      id: 13,
      name: "Bolognese",
      productDescription: "Pasta, tomatsaus, kjøtt",
      allergies: "Ingen",
      image: "https://i.imgur.com/ZQKKVWu.jpg",
      productType: "Pasta",
      price: 179,
    },
    {
      id: 14,
      name: "Pomodoro",
      productDescription: "Pasta, basilikum og soltørket tomat",
      allergies: "V",
      image: "https://i.imgur.com/YvVV3zE.jpg",
      productType: "Pasta",
      price: 179,
    },
    {
      id: 15,
      name: "Salsiccia",
      productDescription: "Pasta, pølse, hvit saus",
      allergies: "Ingen",
      image: "https://i.imgur.com/GiN1P93.jpg",
      productType: "Pasta",
      price: 179,
    },
    {
      id: 16,
      name: "Verdura",
      productDescription: "Pasta, dagens grønnsaker",
      allergies: "V",
      image: "https://i.imgur.com/IoSBW0w.jpg",
      productType: "Pasta",
      price: 179,
    },
    {
      id: 17,
      name: "Al Forno",
      productDescription: "Tomat, fløte og hvitvin",
      allergies: "Ingen",
      image: "https://i.imgur.com/FdmGTx5.jpg",
      productType: "Pasta",
      price: 179,
    },
    {
      id: 18,
      name: "Piselli",
      productDescription: "Pasta, tomater, erter og basilikum",
      allergies: "Ingen",
      image: "https://i.imgur.com/8fP0xon.jpg",
      productType: "Pasta",
      price: 179,
    },
    {
      id: 19,
      name: "Pollo",
      productDescription: "Pasta, tomat, kylling, og basilikum",
      allergies: "Ingen",
      image: "https://i.imgur.com/EBoF1iD.jpg",
      productType: "Pasta",
      price: 189,
    },
    {
      id: 20,
      name: "Ceci",
      productDescription: "Pasta, tomat, og kikerter",
      allergies: "Ingen",
      image: "https://i.imgur.com/Ps9KPW6.jpg",
      productType: "pasta",
      price: 179,
    },
  ];

  return (
    <>
      <div>
        <motion.div
          animate={animation}
          ref={ref}
          style={{
            paddingBottom: "7em",
            opacity: 0,
          }}
        >
          <Typography variant="h2" align="center" marginBottom="2em">
            Pasta
          </Typography>
          <Grid
            container
            spacing={3}
            align="center"
            direction="row"
            justifyContent="center"
          >
            {pastaList.map((p) => {
              return (
                <Grid item sm={12} md={5} lg={3}>
                  <ProductCard product={p} />
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </div>
    </>
  );
}

export default PastaList;
