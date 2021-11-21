import { IconButton, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider } from '@mui/material';
import React, { useContext } from 'react';
import UserContext from "../App"


export default function ProductCartCard(props) {
  function triggerDelete(id) {
    props.deleteProduct(id)
  }


  return (
    <>
      <div>
        <Grid container sx={{ minWidth: 400, m: 1 }} style={{ alignItems: "center" }}>
          <Grid item xs={2}>
            <IconButton aria-label="delete" onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              triggerDelete(props.product);
            }}>
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <Typography id="product-name">
              {props.product.name} -
              {props.product.productDescription}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-label="remove">
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <Typography id="product-amount" style={{ textAlign: "center", backgroundColor: "lightgrey", borderRadius: "4px" }}>
              1
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <Typography id="total-product-price" style={{ textAlign: "center" }}>
              {props.product.price + "kr"}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Divider component="li" />

    </>
  );
}
