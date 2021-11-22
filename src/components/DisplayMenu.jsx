import { Button, ButtonGroup, Box } from "@mui/material";
import React from "react";
import PastaList from "./PastaList";
import PizzaList from "./PizzaList";
import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";

function DisplayMenu() {
  const [active, setActive] = useState("alt");

  return (
    <>
      <div style={{ backgroundColor: "#c0c0c01a", padding: "2em" }}>
        <Grid style={{ height: "22em" }} container spacing={2}>
          <Grid
            style={{
              textAlign: "center",
              alignSelf: "flex-end",
              marginTop: "5em",
            }}
            item
            xs={12}
            md={12}
          >
            <h1>Meny</h1>
            <p>_______________________________</p>
          </Grid>
          <Grid
            style={{ textAlign: "center", alignSelf: "baseline" }}
            item
            xs={12}
            md={12}
          >
            <Typography>
              <Box sx={{ fontStyle: "italic" }}>
                Vi serverer italienske retter og pizzaen vår er laget i
                steinovn.
              </Box>
            </Typography>
            <div
              style={{
                align: "center",
                whiteSpace: "nowrap",
                marginTop: "3em",
                marginBottom: "3em",
              }}
            >
              <p
                style={{
                  marginRight: "2em",
                  marginLeft: "1em",
                  fontWeight: "bold",
                  position: "relative",
                  left: "1em",
                }}
              >
                Allergener
              </p>
              <p
                style={{
                  display: "inline-block",
                  marginRight: "2em",
                  marginLeft: "2em",
                }}
              >
                G - Glutenfri
              </p>
              <p
                style={{
                  display: "inline-block",
                  marginRight: "2em",
                  marginLeft: "2em",
                }}
              >
                S - Sjømat
              </p>
              <p
                style={{
                  display: "inline-block",
                  marginRight: "2em",
                  marginLeft: "2em",
                }}
              >
                V - Vegetar
              </p>
            </div>
          </Grid>
        </Grid>
        {/**KAN ENDRE BORDER FARGE */}
        <ButtonGroup
          id="button-group"
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "6em",
            marginBottom: "5vh",
          }}
        >
          <Button onClick={() => setActive("alt")}>Vis alt</Button>
          <Button onClick={() => setActive("pizza")}>Pizza</Button>
          <Button onClick={() => setActive("pasta")}>Pasta</Button>
        </ButtonGroup>
      </div>
      {active === "alt" && (
        <>
          <PizzaList />
          <PastaList />
        </>
      )}

      {active === "pizza" && <PizzaList />}
      {active === "pasta" && <PastaList />}
    </>
  );
}

export default DisplayMenu;
