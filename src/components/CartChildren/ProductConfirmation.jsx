import React from "react";
/* MUI */
import {
    Grid,
    Typography
} from "@mui/material";

export default function ProductConfirmation(props) {

    return (
        <>
            {
                props.products.map((product) => {
                    return (
                        <Grid
                            container
                            spacing={2}
                            style={{ paddingBottom: "3%" }}
                            >
                            <Grid item xs={1} />
                            <Grid item xs={3}>
                                <Typography>{product.quantity + " x"}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>{product.name}</Typography>
                            </Grid>
                            <Grid item xs={0}>
                                <Typography>{product.price + " kr"}</Typography>
                            </Grid>
                        </Grid>
                    );
                })
            }
        </>
    )
}
