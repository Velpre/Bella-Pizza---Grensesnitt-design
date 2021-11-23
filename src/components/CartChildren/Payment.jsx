import React from "react";

import {
    TextField,
    FormControl,
    Grid,
    RadioGroup,
    FormLabel,
    FormControlLabel,
    Radio,
    TableContainer

} from "@mui/material";


export default function Payment() {
    return (
        <FormControl sx={{ maxWidth: 500 }} style={{ alignItems: "center" }}>
            <FormControl component="fieldset">
                <FormLabel style={{ paddingTop: "2%" }}>Betalingsmetode</FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="card" control={<Radio />} label="VISA" />
                    <FormControlLabel value="vipps" control={<Radio />} label="Vipps" />
                    <FormControlLabel value="cash" control={<Radio />} label="Betal ved overlevering" />
                </RadioGroup>
            </FormControl>
            <TableContainer>
                <TextField
                    label="Kommentar"
                    required
                    rows={1}
                    defaultValue=""
                    margin="dense"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    required
                    label="Telefon"
                    variant="outlined"
                    fullWidth
                />
            </TableContainer>

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
