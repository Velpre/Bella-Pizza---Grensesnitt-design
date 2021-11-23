import React from "react";
/* MUI */
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartBadge(props) {

    function handleOpen() {
        props.openModal()
    }

    return (
        <>
            <Badge
                badgeContent={props.count}
                color="primary"
                onClick={handleOpen}
            >
                <ShoppingCartIcon color="action" style={{ color: "white" }} onClick={handleOpen} />
            </Badge>
        </>
    )
}