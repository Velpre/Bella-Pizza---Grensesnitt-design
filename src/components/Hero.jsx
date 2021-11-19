
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import headerImage from "../images/header-image.jpg";



// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    image: {
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
        <div maxWidth="1">
            <div className={classes.image}>
            </div>
        </div>
    );
}