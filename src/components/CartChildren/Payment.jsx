import React from "react";
/* MUI */
import {
    TextField,
    FormControl,
    Grid,

} from "@mui/material";

export default function Payment(){
    return(
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
                    <p>swag</p>
                </Grid>
                <Grid xs={12} sm={5} item>
                    <p>jy</p>
                </Grid>
            </Grid>
        </FormControl>
    )
}