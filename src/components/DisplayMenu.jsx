import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import PastaList from "./PastaList";
import PizzaList from "./PizzaList";
import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";




function DisplayMenu() {
    const [active, setActive] = useState("alt");


    return (
        <>
            <div style={{ backgroundColor: "white", padding: "10px" }}>
                <Grid style={{ height: "30vh" }} container spacing={2} >
                    <Grid style={{ textAlign: "center", alignSelf: "flex-end" }} item xs={12} md={12}>
                        <Typography variant="h1" align='center' marginBottom="2vh">Meny</Typography>
                        <p>_______________________________</p>
                    </Grid>
                    <Grid style={{ textAlign: "center", alignSelf: "baseline" }} item xs={12} md={12}>
                        <Typography>
                            Vi serverer italienske retter og pizzaen vår er laget i steinovn.
                        </Typography>
                    </Grid>
                </Grid>

                <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', marginBottom: "7vh" }} variant="outlined">
                    <Button onClick={() => setActive("alt")}>Vis alt</Button>
                    <Button onClick={() => setActive("pizza")}>Pizza</Button>
                    <Button onClick={() => setActive("pasta")}>Pasta</Button>
                </ButtonGroup>
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