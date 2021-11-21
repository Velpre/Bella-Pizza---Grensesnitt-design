import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import PastaList from "./PastaList";
import PizzaList from "./PizzaList";
import { useState } from "react";
import { Grid, Typography} from "@material-ui/core";




function DisplayMenu() {
    const [active, setActive] = useState("alt");
    

    return (
        <>
        <Grid  style={{height: "30vh", backgroundColor: "#FFFFFF"}} container spacing={2}>
            <Grid style={{textAlign: "center", alignSelf: "flex-end"}} item xs={12} md={12}>
                <h1>Meny</h1>
                <p>_______________________________</p>
            </Grid>
            <Grid style={{textAlign: "center", alignSelf: "baseline"}} item xs={12} md={12}>
                <Typography>    
                    Vi serverer italienske retter og pizzaen vår er laget i steinovn.
                </Typography>
            </Grid>
        </Grid>
            <ButtonGroup sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: "8vh"}} variant ="outlined">
                <Button onClick={() => setActive("alt")}>Vis alt</Button>
                <Button onClick={() => setActive("pizza")}>Pizza</Button>
                <Button onClick={() => setActive("pasta")}>Pasta</Button>
            </ButtonGroup>
            {
            active === "alt" && 
            <>
                <PizzaList/>
                <PastaList/>
            </>    
            }

            {active === "pizza" && <PizzaList/>}
            {active === "pasta" && <PastaList/>}
        </>
        );
    }

    export default DisplayMenu;