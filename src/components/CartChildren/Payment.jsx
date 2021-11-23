import React, {useState} from "react";

/* MUI */ 
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

export default function Payment(props) {
    function handleTarget(target){
        if (target === "visa"){
            props.setVisaBox()
            props.setFalse(target)
        } else if (target === "vipps"){
            props.setVippsBox()
            props.setFalse(target)
        } else if (target === "cash"){
            props.setCashBox()
            props.setFalse(target)
        }
    }

    return (
        <FormControl sx={{ maxWidth: 500 }} style={{ alignItems: "center" }}>
            <FormControl component="fieldset">
                <FormLabel style={{ paddingTop: "2%" }}>Betalingsmetode</FormLabel>
                <RadioGroup row aria-label="methods" name="row-radio-buttons-group" onChange={(e) => handleTarget(e.target.value)}>
                    <FormControlLabel value="visa" control={<Radio />} label="VISA" />
                    <FormControlLabel value="vipps" control={<Radio />} label="Vipps" />
                    <FormControlLabel value="cash" control={<Radio />} label="Betal ved overlevering" />
                </RadioGroup>
            </FormControl>
        {props.stateVipps ? ( 
            <TableContainer>
                <TextField 
                    margin="dense"
                    required
                    label="Telefonnummer"
                    variant="outlined"
                    fullWidth
                />
            </TableContainer>
        ) : (null)}
        {props.stateVisa ? ( 
            <TableContainer>
                <TextField 
                    margin="dense"
                    required
                    label="Tmmer"
                    variant="outlined"
                    fullWidth
                />
            </TableContainer>
        ) : (null)}
        {props.stateCash ? ( 
            <TableContainer>
                <TextField 
                    margin="dense"
                    required
                    label="Telefdsmer"
                    variant="outlined"
                    fullWidth
                />
            </TableContainer>
        ) : (null)}
        </FormControl>
    )
}
