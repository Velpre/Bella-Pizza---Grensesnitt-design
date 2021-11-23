import React from "react";

/* MUI */
import {
  TextField,
  FormControl,
  Grid,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  TableContainer,
} from "@mui/material";

export default function Payment(props) {
  function handleTarget(target) {
    if (target === "visa") {
      props.setVisaBox();
      props.setFalse(target);
    } else if (target === "vipps") {
      props.setVippsBox();
      props.setFalse(target);
    } else if (target === "cash") {
      props.setCashBox();
      props.setFalse(target);
    }
  }

    return (
        <FormControl sx={{ maxWidth: 500 }} style={{ alignItems: "center" }}>
            <FormControl component="fieldset">
                <FormLabel style={{ paddingTop: "2%", color: "#000000"}}>Betalingsmetode</FormLabel>
                <RadioGroup row aria-label="methods" name="row-radio-buttons-group" onChange={(e) => handleTarget(e.target.value)}>
                    <FormControlLabel value="visa" control={<Radio style={{color: "#000000"}} />} label="VISA" />
                    <FormControlLabel value="vipps" control={<Radio style={{color: "#000000"}}/>} label="Vipps" />
                    <FormControlLabel default value="cash" control={<Radio style={{color: "#000000"}}/>} label="Betal ved overlevering" />
                </RadioGroup>
            </FormControl>
        {props.stateVipps ? ( 
            <TableContainer>
                <TextField 
                    color="secondary"
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
                    color="secondary"
                    margin="dense"
                    required
                    label="Kortnummer"
                    variant="outlined"
                    fullWidth
                />
                <Grid container justifyContent="space-between">
                    <Grid xs={12} sm={5} item>
                        <TextField
                        color="secondary"
                        margin="dense"
                        required
                        label="Utløpsdato"
                        variant="outlined"
                        fullWidth
                        />
                    </Grid>
                    <Grid xs={12} sm={5} item>
                        <TextField
                        color="secondary"
                        margin="dense"
                        required
                        label="CVC"
                        variant="outlined"
                        fullWidth
                        />
                    </Grid>
                </Grid>
                <TextField 
                    color="secondary"
                    margin="dense"
                    required
                    label="Vennligst oppgi ditt telefonnummer"
                    variant="outlined"
                    fullWidth
                />
            </TableContainer>
        ) : (null)}
        {props.stateCash ? ( 
            <TableContainer>
                <TextField 
                    color="secondary"
                    margin="dense"
                    required
                    label="Vennligst oppgi ditt telefonnummer"
                    variant="outlined"
                    fullWidth
                />
            </TableContainer>
        ) : (null)}
        </FormControl>
    )
}
