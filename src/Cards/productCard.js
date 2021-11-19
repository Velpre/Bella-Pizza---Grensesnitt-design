import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import img from "../Cards/Images/pizza1.jpeg";

export default function ProductCard() {
  return (
    <Grid container alignItems="flex-start" direction="row" alignItems='end'>
      <Grid item xs={8} md={4} >
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="pizza1" //Img referance, can be any name 
        height="120"
        image={img} //Total name of image
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nummer 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Legg til</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={8} md={4}>
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="pizza1" //Img referance
        height="120"
        image={img} //Total name of image
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nummer 2
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Legg til</Button>
      </CardActions>
    </Card>
    </Grid>
    
    <Grid item xs={8} md={4}>
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="pizza1" //Img referance
        height="120"
        image={img} //Total name of image
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nummer 3
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Legg til</Button>
      </CardActions>
    </Card>
    </Grid>
      </Grid>
      
    );
}

