import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';


export default function MultiActionAreaCard() {

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
          1
        </CardContent>
      </CardActionArea>

      <Divider variant="inset" component="hr" />

      <List component="nav" aria-label="mailbox folders">
        <CardActionArea sx={{ p: 1.2 }}>
          

          <CardContent sx={{ m: 1.2 }}>
            <Typography gutterBottom variant="h5" component="div">
              Italian Lizard Pizza
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </List>

      <Divider variant="inset" component="hr" />


      <CardActionArea >

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MAMA Lizard Pizza
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>


      <Divider variant="inset" component="hr" />

      <List component="nav" aria-label="mailbox folders">
        <Button size="small" style={{
          backgroundColor: "#21b64e",
        }}>
          Share
        </Button>

        <CardContent >

          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </List>
    </Card >
  );
}