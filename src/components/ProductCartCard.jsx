import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import UserContext from "../App"


export default function ProductCartCard() {

  const { products } = useContext(UserContext);



  return (
    <Card sx={{ maxWidth: 570, mt: 0.2 }}>
      <CardActionArea sx={{ m: 1.2 }}>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard Pizza
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}