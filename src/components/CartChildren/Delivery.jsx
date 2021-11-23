import React from "react";
/* MUI */
import {
    TextField,
    FormControl,
    TableContainer

} from "@mui/material";

export default function Delivery() {


    return (
        <TableContainer>
                <TextField
                    color="secondary"
                    margin="dense"
                    required
                    label="Adresse"
                    variant="outlined"
                    fullWidth
                    rows={3}
                />
        </TableContainer>
    )
}