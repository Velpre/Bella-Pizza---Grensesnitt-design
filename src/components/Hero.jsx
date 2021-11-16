
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import headerImage from "../images/header-image.jpg";



// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${headerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        witdh: "100%",
        color: "red"
    },
    size: {
        postion: "relative",
        top: "100px" //change
    }
}));

export default function Hero() {
    const classes = useStyles();

    return (
        <div maxWidth="1">
            <div className={classes.root}>
            </div>
        </div>
    );
}