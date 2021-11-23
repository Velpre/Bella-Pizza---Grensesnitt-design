import React from "react";
/* Components */
import PastaList from "./PastaList";
import PizzaList from "./PizzaList";
/* Hooks */
import { useState } from "react";
/* MUI */
import { Grid, Typography } from "@material-ui/core";
import { Button, ButtonGroup } from "@mui/material";

function DisplayMenu() {
  const [active, setActive] = useState("alt");

  document.body.style.backgroundColor = "#c0c0c01a";
  document.body.style.padding = "0";

  return (
    <>
      <div
        style={{
          height: "100%",
          marginTop: "1.3em",
          align: "center",
          justifyContent: "center",
          width: "100%",

        }}
      >
        <Grid
          style={{ height: "100%" }}
          container
          align="center"
          direction="row"
          justifyContent="center"
        >
          <Grid
            style={{
              textAlign: "center",
              alignSelf: "flex-end",
              marginTop: "5em",
            }}
            item
            xs={12}
            sm={12}
            md={12}
          >
            <Typography variant="h1">Meny</Typography>
            <p>_______________________________</p>
          </Grid>
          <Grid
            style={{ textAlign: "center", alignSelf: "baseline" }}
            item
            xs={12}
            md={12}
          >
            <Typography variant="subtitle1">
              Vi serverer italienske retter og pizzaen vår er laget i steinovn.
            </Typography>
            <div
              style={{
                align: "center",
                marginTop: "3em",
                justifyContent: "center",
              }}
            >
              <Typography variant="subtitle2">
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
              </Typography>
            </div>
          </Grid>
          <ButtonGroup
            id="button-group"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "3em",
              marginBottom: "7em",
            }}
            variant="outlined"
          >
            <Button color="secondary" style={{ border: '1.8px solid' }}

              onClick={() => setActive("alt")}>Alt</Button>
            <Button color="secondary" style={{ border: '1.8px solid' }}

              onClick={() => setActive("pizza")}>Pizza</Button>
            <Button color="secondary" style={{ border: '1.8px solid' }}

              onClick={() => setActive("pasta")}>Pasta</Button>
          </ButtonGroup>
        </Grid>
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
