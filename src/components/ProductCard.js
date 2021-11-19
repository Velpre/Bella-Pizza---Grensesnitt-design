import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ProductCard(props) {
  return (
    //<Grid container spacing={1}  justifyContent='center' alignItems='center'   direction='row'>
      //<Grid item sm={12} md={5} lg={2}>
        <Card style={{position: 'relative', width: 250, height: 300}} >
        <CardMedia
            component="img"
            alt="product-image"
            height="120"
            image={props.product.image}
          />
          <CardContent align ='left'>
            <Typography gutterBottom variant="h5" component="div" >
              {props.product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.product.productDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{ position: 'absolute', left: 60, bottom: 10, transform: 'TranslateX(-50)'}} variant='contained' size='large'>Legg til</Button>
          </CardActions>
        </Card>
      //</Grid>

    //</Grid>      
    );
}

