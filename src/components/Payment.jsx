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

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

/* MUI STYLES*/
import { styled } from "@mui/material/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";


/* COMPONENTS */
import Date from "./Date";
import Time from "./Time";



export default function Payment() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onClick={""} />}
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
