import React from "react";
import {
    Typography,
    Container,
    Button, 
    ButtonGroup,
    Box
} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import headerImage from "../images/hero-image.jpeg";
import '../css/Hero.css'

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${headerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
    },
    size: {
        postion: "relative",
        top: "100px" //change
    }
}));

export default function Hero() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <ButtonGroup style={{height: "100vh", display: "flex", justifyContent: "center"}}>
                <Box m={2} pt={3} style={{alignItems: "center"}}>
                    <Button variant="contained" color="default">
                        Reserver bord
                    </Button>
                </Box>
                <Box m={2} pt={3} style={{justifyContent: "center"}}>
                    <Button variant="contained" color="default">
                        Bestill takeaway
                    </Button>
                </Box>
                </ButtonGroup>
            </div>
        </div>
    );
}