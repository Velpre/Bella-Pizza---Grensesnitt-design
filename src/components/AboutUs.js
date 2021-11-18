import React from 'react'
import './AboutUs.css';
import {Button, Grid, Container, CssBaseline, Typography} from '@mui/material'
import RestaurantPhoto from '../images/restaurant.jpg'
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';

export default function AboutUs(){
    return (
            <Grid className="about-us-container" container spacing={1}>
                <Grid item xs={0} md={1} />
                <Grid item xs={12} md={4} className="about-us-info">
                    <h1>ITALIENSK I ÅNDEN</h1>
                    <Typography>
                        Vår kjærlighetsaffære med italiensk mat er langsiktig. I 1965 visste en klok mann kalt Marco Rossi at pizza i Oslo kunne være bedre, og åpnet Pizzeria Bella i hjertet av byen. Du finner mange valgmuligheter, inkludert klassisk italiensk mat sammen med våre egne signaturretter.
                    </Typography>
                    <Button id="btn-reservation" variant="contained" endIcon={<ArrowIcon />}>Bestill bord</Button>
                </Grid>
                <Grid item xs={0} md={1} />
                <Grid item xs={12} md={6} className="about-us-image">
                    <img id="restaurant-img" src={RestaurantPhoto}/>
                </Grid>
            </Grid>
)
}
