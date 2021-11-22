import React from "react";
/* MUI */
import {
    TextField,
    Box,
    InputLabel,
    FormControl,
    Button,
    Grid,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Badge,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableCell,
    tableCellClasses
  } from "@mui/material";

export default function Payment() {
  return (
    <Box>
    <FormGroup>
    <FormControlLabel
      control={<Checkbox onClick={handleDeliveryChange} />}
      label="Hjemlevering"
    />
    </FormGroup>
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
  <TableContainer component={Paper}>
  <TextField
        label="Kommentar"
        multiline
        rows={3}
        defaultValue=""
        margin="dense"
        fullWidth
        />
    <Table sx={{ minWidth: 420 }} aria-label="customized table">
      <TableHead></TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            Totalt å betale
          </StyledTableCell>
          <StyledTableCell align="right" sx={{ pr: 4 }}>
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </Table>
  </TableContainer>
<DialogActions>
  <Button variant="contained"
    >BETAL NÅ
  </Button>
</DialogActions>
</Box>
)
}
