import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import PastaList from "./PastaList";
import PizzaList from "./PizzaList";
import { useState } from "react";




function DisplayMenu() {
    const [active, setActive] = useState("alt");
    

    return (
        <>
            <ButtonGroup sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: "20px"}} variant ="outlined">
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