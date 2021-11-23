import React from "react";
/* MUI */
import {
    Table,
    TableBody,
    TableContainer,
    TableRow,
    Paper,
    TableCell,
    tableCellClasses
} from "@mui/material";

/* MUI STYLES*/
import { styled } from "@mui/material/styles";

export default function Price(props) {

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
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 420 }} aria-label="customized table">
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                            Totalt å betale
                        </StyledTableCell>
                        <StyledTableCell align="right" sx={{ pr: 4 }}>
                            {props.price}
                            {"kr"}
                        </StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}