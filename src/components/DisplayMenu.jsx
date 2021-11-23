import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import PastaList from "./PastaList";
import PizzaList from "./PizzaList";
import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";




function DisplayMenu() {
  const [active, setActive] = useState("alt");

  document.body.style.backgroundColor = "#c0c0c01a";
  document.body.style.padding = "0";


  return (
    <>
      <div style={{ height: "100%", marginTop: "1.5em", align: 'center', justifyContent: 'center', width: "100%" }}>
        <Grid style={{ height: "100%" }} container spacing={2} align='center' direction='row' justifyContent='center' >
          <Grid style={{ textAlign: "center", alignSelf: "flex-end", marginTop: "5em" }} item xs={12} sm={12} md={12}>
            <Typography variant="h1">Meny</Typography>
            <p>_______________________________</p>
          </Grid>
          <Grid style={{ textAlign: "center", alignSelf: "baseline" }} item xs={12} md={12}>
            <Typography variant="subtitle1">
              Vi serverer italienske retter og pizzaen vår er laget i steinovn.
            </Typography>
            <div style={{ align: "center", marginTop: "3em", align: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle2">
                <p style={{ marginRight: "2em", marginLeft: "1em", fontWeight: "bold", position: "relative", left: "1em" }}>Allergener</p>
                <p style={{ display: "inline-block", marginRight: "2em", marginLeft: "2em" }}>G - Glutenfri</p>
                <p style={{ display: "inline-block", marginRight: "2em", marginLeft: "2em" }}>S - Sjømat</p>
                <p style={{ display: "inline-block", marginRight: "2em", marginLeft: "2em" }}>V - Vegetar</p>
              </Typography>
            </div>
          </Grid>
          <ButtonGroup id="button-group" color="primary" sx={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center', marginBottom: "7em" }} variant="outlined">
            <Button onClick={() => setActive("alt")}>Alt</Button>
            <Button onClick={() => setActive("pizza")}>Pizza</Button>
            <Button onClick={() => setActive("pasta")}>Pasta</Button>
          </ButtonGroup>
        </Grid>
      </div>
      {
        active === "alt" &&
        <>
          <PizzaList />
          <PastaList />
        </>
      }

      {active === "pizza" && <PizzaList />}
      {active === "pasta" && <PastaList />}
    </>
  );
}

export default DisplayMenu;