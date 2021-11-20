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
    <Grid container spacing={1}  justifyContent='center' alignItems='center'   direction='row'>
      <Grid item sm={12} md={5} lg={2}>
        <Card sx={{ maxWidth: 300 }}>
        <CardMedia
            component="img"
            alt="pizza1"
            height="120"
            image={img}
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

      <Grid item sm={12} md={5} lg={2}>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="pizza1"
            height="120"
            image={img}
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
    
      <Grid item sm={12} md={5} lg={2}>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="pizza1"
            height="120"
            image={img} 
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

      <Grid item sm={12} md={5} lg={2}>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="pizza1" 
            height="120"
            image={img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nummer 4
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

