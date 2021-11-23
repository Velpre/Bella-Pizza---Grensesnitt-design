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
                            style={{ minWidth: 400, paddingBottom: "3%" }}
                            >
                            <Grid item xs={0.5} />
                            <Grid item xs={2}>
                                <Typography>{product.quantity + " x"}</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography>{product.name}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography>{product.price + " kr"}</Typography>
                            </Grid>
                        </Grid>
                    );
                })
            }
        </>
    )
}
