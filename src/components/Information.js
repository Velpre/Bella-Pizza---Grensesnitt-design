import React from "react";
import './Information.css'
import {Grid, Typography, Button} from '@mui/material'
import PizzaImage from '../images/pizzaoptions.jpg'
import PastaImage from '../images/pastaoptions.jpg'
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';

export default function Information(){
        return (
            <Grid className="information-container" container spacing={2}>

                <Grid item xs={0} md={12} container className="food-container">
                    <Grid item xs={12} md={6}>
                        <img id="food-image" src={PizzaImage}/>
                    </Grid>
                    <Grid item xs={12} md={6}  className="info-section">
                        <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy.
                        </Typography>
                        <Button id="btn-show-pizza" variant="contained" endIcon={<ArrowIcon />}>Pizza</Button>
                    </Grid>
                </Grid>

                <Grid item xs={0} md={12} container className="food-container">
                    <Grid item xs={12} md={6} className="info-section">
                        <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy.
                        </Typography>
                        <Button id="btn-show-pasta" variant="contained" endIcon={<ArrowIcon />}>Pasta</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img id="food-image" src={PastaImage}/>
                    </Grid>
                </Grid>

            </Grid>
)
}
