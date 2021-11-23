import React from "react";
/* MUI */
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartBadge(props) {

    function handleOpen() {
        props.openModal()
    }

    let value; 

    for(let i = 0; i < props.products.length; i++){
        value += props.products[i].quantity
    }

    return (
        <>
            <Badge
                badgeContent={value}
                color="primary"
                onClick={handleOpen}
            >
                <ShoppingCartIcon color="action" style={{ color: "white" }} onClick={handleOpen} />
            </Badge>
        </>
    )
}