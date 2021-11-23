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
                margin="dense"
                required
                label="Navn"
                variant="outlined"
                fullWidth
            />
            <TextField
                margin="dense"
                required
                label="Adresse"
                variant="outlined"
                fullWidth
            />

            <Grid container justifyContent="space-between">
                <Grid xs={12} sm={5} item>
                    <Date></Date>
                </Grid>
                <Grid xs={12} sm={5} item>
                    <Time></Time>
                </Grid>
            </Grid>
        </FormControl>
    )
}