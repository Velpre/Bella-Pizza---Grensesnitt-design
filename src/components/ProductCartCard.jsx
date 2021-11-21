import React, { useContext } from 'react';
import UserContext from "../App"
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ProductCard from './ProductCard';



function ProductCartCard(props) {
  console.log("called");

  return (
    <>
      {props.product.name}
    </>
  )
}


export default ProductCartCard;

