import React from "react";
import {
    Typography,
    Container,
    Button,
    ButtonGroup,
    Box,
    useMediaQuery,
    Grid,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
        position: "relative",
    },
}));

export default function Hero() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    return (
        <div id="hero-div" className={classes.root}>
            <Grid container id="hero-container"
                spacing={5}
                direction={`${isMobile ? "column" : "row"}`}
                alignItems="center"
                justifyContent="center"
                style={{ height: '100vh', width: '100%', position: 'relative', top: "10%" }}>
                <Grid item >
                    <Button className="hero-btn" variant="contained" color="primary" size="large" >
                        Bestill takeaway
                    </Button>
                </Grid>
                <Grid item>
                    <Button className="hero-btn" variant="contained"
                        size="large"
                        color="primary"
                        href="/meny" >

                        Reserver bord
                    </Button>
                </Grid>
            </Grid>
        </div >
    );
}