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


export default function Price(props) {


    return (
        <TableContainer sx={{
            width: "100%", overflow:"hidden"
        }} >
            <Table sx={{ minWidth: 420 }} aria-label="customized table" >
                <TableBody >
                    <TableRow>
                        <TableCell>
                            Totalt å betale  {props.price + " kr"}
                        </TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}