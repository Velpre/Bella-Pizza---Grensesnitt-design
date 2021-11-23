import React, { useContext } from "react";
/* MUI */
import {
    TextField,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Badge,
    TableContainer,
    TableRow,
    Paper,
    TableCell,
    tableCellClasses,
} from "@mui/material";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

/* MUI ICON */
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

/* MUI STYLES*/
import { styled } from "@mui/material/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

/* COMPONENTS */
import ProductCartCard from "./CartChildren/ProductCartCard";
import Price from "./CartChildren/Price";
import ProductConfirmation from "./CartChildren/ProductConfirmation";
import Delivery from "./CartChildren/Delivery";
import CartBadge from "./CartChildren/CartBadge";
import Payment from "./CartChildren/Payment"

/* GLOBAL STATE*/
import { UserContext } from "../App";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(1),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const useStyles = makeStyles((theme) => ({
    desktopScroll: {
        "& .MuiDialog-scrollPaper": {
            alignItems: "flex-start",
            justifyContent: "right",
        },
    },
    mobileScroll: {
        "& .MuiDialog-scrollPaper": {
            alignItems: "flex-start",
            justifyContent: "center",
        },
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    const classes = useStyles();

    return (
        <DialogTitle sx={{ mt: 0 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function Cart() {
    const [open, setOpen] = React.useState(false);
    const [order, setOrder] = React.useState(false);
    const [delivery, setDelivery] = React.useState(false);
    const [payment, setPayment] = React.useState(false);



    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOrderOpen = () => {
        setOrder(true);
    };
    const handleOrderClose = () => {
        setOrder(false);
    };    
    const handleDeliveryOpen = () => {
        setDelivery(true);
    };
    const handleDeliveryClose = () => {
        setDelivery(false);
    };
    const handlePaymentOpen = () => {
        setPayment(true)
    };
    const handlePaymentClose = () => {
        setPayment(false)
    };












    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const { products, setProducts } = useContext(UserContext);

    function deleteFromCart(prop) {
        const filteredProducts = products.filter(
            (product) => product.id !== prop.id
        );
        setProducts(filteredProducts);
    }
    let price = 0;

    if (products !== 0) {
        let prices = [];
        prices = products.map((product) => {
            return parseInt(product.quantity) * parseInt(product.price);
        });

        prices.forEach((e) => {
            price += e;
        });
    }

    function subtractQuantityOfProduct(product) {
        if (product.quantity == 1) {
            deleteFromCart(product);
        } else {
            let foundIndex = products.findIndex((obj) => obj.id == product.id);
            products[foundIndex].quantity -= 1;
            setProducts([...products]);
        }
    }

    function addQuantityOfProduct(product) {
        let foundIndex = products.findIndex((obj) => obj.id == product.id);
        products[foundIndex].quantity += 1;
        setProducts([...products]);
    }

    let product;
    if (products !== 0) {
        product = products.map((product, index) => {
            return (
                <ProductCartCard
                    product={product}
                    deleteProduct={deleteFromCart}
                    removeQuantity={subtractQuantityOfProduct}
                    addQuantity={addQuantityOfProduct}
                />
            );
        });
    } else {
        product = "empty";
    }

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
        <div>
            {isMobile ? (
                <>
                
                </>
            ) : (
                <>
                    <CartBadge products={products} openModal={() => {
                        handleClickOpen()
                        handleOrderOpen()}} />
                    <BootstrapDialog
                        style={{ overflow: "auto" }}
                        className={classes.desktopScroll}
                        onClose={() => {
                            handleClose();
                            handleOrderClose();
                            handleDeliveryClose();
                        }}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        {order ? (
                            <Box>
                                <BootstrapDialogTitle
                                    id="customized-dialog-title"
                                    onClose={() => {
                                        handleClose();
                                        handleOrderClose();
                                        handleDeliveryClose();
                                    }}
                                >
                                    Handlekurv
                                </BootstrapDialogTitle>
                                <DialogContent dividers>{product}</DialogContent>
                                <Price price={price} />
                                <DialogActions>
                                    <Button variant="contained"
                                        autoFocus
                                        onClick={() => {
                                            {handleOrderClose()}
                                        }}
                                    >
                                        Til betaling
                                    </Button>
                                </DialogActions>
                            </Box>
                        ) : (
                            <Box>
                                <BootstrapDialogTitle
                                    id="customized-dialog-title"
                                    onClose={handleClose}
                                >
                                    Din bestilling
                                </BootstrapDialogTitle>
                                <DialogContent dividers>
                                    <ProductConfirmation products={products}/>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox onClick={delivery ? (handleDeliveryClose):(handleDeliveryOpen)}/>}
                                            label="Hjemlevering"
                                        />
                                    </FormGroup>
                                    {delivery ? (<Delivery/>) : ( null )}
                                    <TableContainer component={Paper}>
                                        <TextField
                                            label="Kommentar"
                                            multiline
                                            rows={3}
                                            defaultValue=""
                                            margin="dense"
                                            fullWidth
                                        />
                                        
                                    </TableContainer>
                                    <Price price={price}></Price>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="contained"
                                        autoFocus
                                        onClick={() => {
                                                handleClose();
                                                handleOrderClose();
                                                handleDeliveryClose();
                                        }}
                                    >
                                        BETAL NÅ
                                    </Button>
                                </DialogActions>
                            </Box> 
                        )}
                    </BootstrapDialog>
                </>
            )}
        </div>
    );
}
