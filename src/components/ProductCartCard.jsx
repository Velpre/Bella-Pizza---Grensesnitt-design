import { IconButton, Grid, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext } from 'react';
import UserContext from "../App"


export default function ProductCartCard() {

  return (
    <Grid container sx={{minWidth: 400}} style={{alignItems: "center"}}>
        <Grid item xs={2}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
      </Grid>
      <Grid item xs={5}>
          <Typography id="product-name">
            Produktnavn Produktnavn Produkt
          </Typography>
      </Grid>
      <Grid item xs={1}>
          <IconButton aria-label="remove">
            <RemoveIcon/>
          </IconButton>
      </Grid>
      <Grid item xs={1}>
        <Typography id="product-amount" style={{textAlign: "center", backgroundColor: "lightgrey", borderRadius: "4px"}}>
          1
        </Typography>
      </Grid>
      <Grid item xs={1}>
          <IconButton aria-label="add">
            <AddIcon/>
          </IconButton>
      </Grid>
      <Grid item xs={2}>
        <Typography id="total-product-price" style={{textAlign: "center"}}>
          200 kr
        </Typography>
      </Grid>
    </Grid>
  );
}