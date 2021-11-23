import React from "react";
/* MUI */
import {
    TextField,
    FormControl,
    Grid,

} from "@mui/material";

/*COMPONENTS */
import Date from "../Date";
import Time from "../Time";

export default function Delivery() {


    return (
        <FormControl sx={{maxWidt:500}}>
            <TextField
                color="secondary"
                margin="dense"
                required
                label="Navn"
                variant="outlined"
                fullWidth
            />
            <TextField
                color="secondary"
                margin="dense"
                required
                label="Adresse"
                variant="outlined"
                fullWidth
            />

            <Grid container justifyContent="space-between">
                <Grid xs={12} sm={5} item>
                    <Date />
                </Grid>
                <Grid xs={12} sm={5} item>
                    <Time />
                </Grid>
            </Grid>
        </FormControl>
    )
}