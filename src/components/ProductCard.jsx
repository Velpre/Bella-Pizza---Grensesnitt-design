import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserContext } from "../App";
import '../css/ProductCard.css'




export default function ProductCard(props) {
    const { products, setProducts } = useContext(UserContext);

    function addProductToCart(product) {

        if (products !== 0) {

            let foundIndex = products.findIndex((obj => obj.id == product.id));
            if (foundIndex === -1) {
                setProducts([
                    ...products,
                    {
                        id: product.id,
                        name: product.name,
                        productDescription: product.productDescription,
                        allergies: product.allergies,
                        image: product.image,
                        productType: product.productType,
                        price: product.price,
                        quantity: 1
                    }
                ]);
            }
            else {
                products[foundIndex].quantity += 1

                setProducts([
                    ...products
                ]);
            }
        } else {
            setProducts([
                {
                    id: product.id,
                    name: product.name,
                    productDescription: product.productDescription,
                    allergies: product.allergies,
                    image: product.image,
                    productType: product.productType,
                    price: product.price,
                    quantity: 1
                }
            ]);
        }
    }

    return (
        <Card style={{ position: 'relative', width: 300, height: 420 }} >
            <CardMedia
                component="img"
                alt="product-image"
                height="180"
                image={props.product.image}
            />
            <CardContent align='left'>
                <Typography gutterBottom variant="h5" component="div" >
                    {props.product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {props.product.productDescription}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Allergener: {props.product.allergies}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Pris: {props.product.price},-
                </Typography>
            </CardContent>
            <CardActions>
                <Button id="ad-to-cart" onClick={() => addProductToCart(props.product)} style={{ position: 'absolute', left: 92.5, bottom: 10, transform: 'TranslateX(-50)' }} variant='contained' size='large'>Legg til</Button>
            </CardActions>
        </Card>
    );
}

