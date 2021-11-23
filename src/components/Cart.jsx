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
    TableContainer,
    TableRow,
    TableCell,
    tableCellClasses,
    Typography,
    Grid
} from "@mui/material";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

/* MUI icon */
import CloseIcon from "@mui/icons-material/Close";

/* MUI styles*/
import { styled } from "@mui/material/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

/* Components */
import ProductCartCard from "./CartChildren/ProductCartCard";
import Price from "./CartChildren/Price";
import ProductConfirmation from "./CartChildren/ProductConfirmation";
import Delivery from "./CartChildren/Delivery";
import CartBadge from "./CartChildren/CartBadge";
import Payment from "./CartChildren/Payment";
import Date from "./Date";
import Time from "./Time";

/* Global state */
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
    const [visa, setOpenVisa] = React.useState(false);
    const [vipps, setOpenVipps] = React.useState(false);
    const [cash, setOpenCash] = React.useState(false);
    const [finish, setFinishOpen] = React.useState(false);
    const [showPayment, setShowPayment] = React.useState(true);


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
    const handleOpenVisa = () => {
        setOpenVisa(true);
    };
    const handleCloseVisa = () => {
        setOpenVisa(false);
    };
    const handleOpenVipps = () => {
        setOpenVipps(true);
    };
    const handleCloseVipps = () => {
        setOpenVipps(false);
    };
    const handleOpenCash = () => {
        setOpenCash(true);
    };
    const handleCloseCash = () => {
        setOpenCash(false);
    };

    const handleFinishOpen = () => {
        setFinishOpen(true);
    };
    const handleFinishClose = () => {
        setFinishOpen(false);
    };
    const handleShowPaymentOpen = () => {
        setShowPayment(true);
    };
    const handleShowPaymentClose = () => {
        setShowPayment(false);
    };

    function setAllFalse(target) {
        switch (target) {
            case "visa":
                handleCloseVipps();
                handleCloseCash();
                break;
            case "vipps":
                handleCloseVisa();
                handleCloseCash();
                break;
            case "cash":
                handleCloseVisa();
                handleCloseVipps();
                break;
            default:
                handleCloseVisa();
                handleCloseVipps();
                handleCloseCash();
        }
    }

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
    let count = 0;

    if (products !== 0) {
        let prices = [];
        prices = products.map((product) => {
            count += product.quantity
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
    if (products.length !== 0) {
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
        product = <Typography>Din handlevogn er tom</Typography>
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

    function removeButton() {
        document.getElementById("disable-button").style.visibility = "hidden"
    }

    return (
        <div>
            {isMobile ? (
                <>
                    <CartBadge count={count} products={products} openModal={() => {
                        handleClickOpen()
                        handleOrderOpen()
                    }} />
                    <BootstrapDialog
                        style={{ overflow: "auto" }}
                        className={classes.mobileScroll}
                        onClose={() => {
                            handleClose();
                            handleOrderClose();
                            handleDeliveryClose();
                            handleFinishClose();
                            setAllFalse("default");
                            handleShowPaymentOpen();
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
                                        handlePaymentOpen();
                                    }}
                                >
                                    Handlekurv
                                </BootstrapDialogTitle>
                                <DialogContent dividers>{product}</DialogContent>
                                <Price price={price} />
                                <DialogActions>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        autoFocus
                                        onClick={() => {
                                            handleOrderClose()
                                            handlePaymentOpen();
                                        }}
                                    >
                                        Gå videre
                                    </Button>
                                </DialogActions>
                            </Box>
                        ) : (
                            <>
                                {payment ? (<Box>
                                    <BootstrapDialogTitle
                                        id="customized-dialog-title"
                                        onClose={() => {
                                            handleClose()
                                            handleOrderClose()
                                            handlePaymentOpen();
                                            handleDeliveryClose();
                                        }}
                                    >
                                        Din bestilling
                                    </BootstrapDialogTitle>
                                    <DialogContent dividers>
                                        <ProductConfirmation products={products} />
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox style={{ color: "#000000" }} onClick={delivery ? (handleDeliveryClose) : (handleDeliveryOpen)} />}
                                                label="Hjemlevering"
                                            />
                                        </FormGroup>
                                        {delivery ? (<Delivery />) : (null)}
                                        <TableContainer>
                                            <TextField
                                                color="secondary"
                                                margin="dense"
                                                required
                                                label="Navn"
                                                variant="outlined"
                                                fullWidth
                                            />
                                            <TextField
                                                color="secondary"
                                                label="Kommentar"
                                                multiline
                                                defaultValue=""
                                                margin="dense"
                                                fullWidth
                                            />
                                            <Grid container justifyContent="space-between">
                                                <Grid xs={12} sm={5} item>
                                                    <Date />
                                                </Grid>
                                                <Grid xs={12} sm={5} item>
                                                    <Time />
                                                </Grid>
                                            </Grid>

                                        </TableContainer>
                                        <Price price={price}></Price>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            color="secondary"
                                            variant="contained"
                                            autoFocus
                                            onClick={() => {
                                                handleOrderClose();
                                                handlePaymentClose()
                                            }}
                                        >
                                            Gå videre
                                        </Button>
                                    </DialogActions>
                                </Box>) : (<Box>
                                    <BootstrapDialogTitle
                                        id="customized-dialog-title"
                                        onClose={() => {
                                            handleClose();
                                            handleOrderClose();
                                            handleDeliveryClose();
                                            handleFinishClose();
                                            setAllFalse("default");
                                            handleShowPaymentOpen();
                                        }}
                                    >
                                        Din bestilling
                                    </BootstrapDialogTitle>
                                    <DialogContent dividers>
                                        {showPayment ? (<Payment setFalse={setAllFalse} setVisaBox={handleOpenVisa} setVippsBox={handleOpenVipps} setCashBox={handleOpenCash} stateVisa={visa} stateVipps={vipps} stateCash={cash} />
                                        ) : (null)}
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            id="disable-button"
                                            color="secondary"
                                            variant="contained"
                                            autoFocus
                                            onClick={() => {
                                                setProducts([]);
                                                handleOrderClose();
                                                handleDeliveryClose();
                                                handleCloseCash();
                                                handleCloseVipps();
                                                handleCloseVisa();
                                                handleFinishOpen();
                                                handleShowPaymentClose();
                                                removeButton();
                                            }}
                                        >
                                            Utfør
                                        </Button>
                                    </DialogActions>
                                    {finish ? (
                                        <Grid container spacing={1} sx={{ maxWidth: 420 }} style={{ marginBottom: "8%" }}>
                                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                                <Typography variant="h6">
                                                    Takk for din bestilling!
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                                <Typography>
                                                    Ditt ordrenummer er # {Math.floor(Math.random() * 10000)}
                                                </Typography>
                                                <Typography>
                                                    Du har mottatt en sms med informasjon.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ) : (null)}
                                </Box>)}
                            </>
                        )}
                    </BootstrapDialog>
                </>
            ) : (
                <>
                    <CartBadge count={count} products={products} openModal={() => {
                        handleClickOpen()
                        handleOrderOpen()
                    }} />
                    <BootstrapDialog
                        style={{ overflow: "auto" }}
                        className={classes.desktopScroll}
                        onClose={() => {
                            handleClose();
                            handleOrderClose();
                            handleDeliveryClose();
                            handleFinishClose();
                            setAllFalse("default");
                            handleShowPaymentOpen();
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
                                        handlePaymentOpen();
                                    }}
                                >
                                    Handlekurv
                                </BootstrapDialogTitle>
                                <DialogContent dividers>{product}</DialogContent>
                                <Price price={price} />
                                <DialogActions>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        autoFocus
                                        onClick={() => {
                                            handleOrderClose()
                                            handlePaymentOpen();
                                        }}
                                    >
                                        Gå videre
                                    </Button>
                                </DialogActions>
                            </Box>
                        ) : (
                            <>
                                {payment ? (<Box>
                                    <BootstrapDialogTitle
                                        id="customized-dialog-title"
                                        onClose={() => {
                                            handleClose()
                                            handleOrderClose()
                                            handlePaymentOpen();
                                            handleDeliveryClose();
                                        }}
                                    >
                                        Din bestilling
                                    </BootstrapDialogTitle>
                                    <DialogContent dividers>
                                        <ProductConfirmation products={products} />
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox style={{ color: "#000000" }} onClick={delivery ? (handleDeliveryClose) : (handleDeliveryOpen)} />}
                                                label="Hjemlevering"
                                            />
                                        </FormGroup>
                                        {delivery ? (<Delivery />) : (null)}
                                        <TableContainer>
                                            <TextField
                                                color="secondary"
                                                margin="dense"
                                                required
                                                label="Navn"
                                                variant="outlined"
                                                fullWidth
                                            />
                                            <TextField
                                                color="secondary"
                                                label="Kommentar"
                                                multiline
                                                defaultValue=""
                                                margin="dense"
                                                fullWidth
                                            />
                                            <Grid container justifyContent="space-between">
                                                <Grid xs={12} sm={5} item>
                                                    <Date />
                                                </Grid>
                                                <Grid xs={12} sm={5} item>
                                                    <Time />
                                                </Grid>
                                            </Grid>

                                        </TableContainer>
                                        <Price price={price}></Price>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            color="secondary"
                                            variant="contained"
                                            autoFocus
                                            onClick={() => {
                                                handleOrderClose();
                                                handlePaymentClose()
                                            }}
                                        >
                                            Gå videre
                                        </Button>
                                    </DialogActions>
                                </Box>) : (<Box>
                                    <BootstrapDialogTitle
                                        id="customized-dialog-title"
                                        onClose={() => {
                                            handleClose();
                                            handleOrderClose();
                                            handleDeliveryClose();
                                            handleFinishClose();
                                            setAllFalse("default");
                                            handleShowPaymentOpen();
                                        }}
                                    >
                                        Din bestilling
                                    </BootstrapDialogTitle>
                                    <DialogContent dividers>
                                        {showPayment ? (<Payment setFalse={setAllFalse} setVisaBox={handleOpenVisa} setVippsBox={handleOpenVipps} setCashBox={handleOpenCash} stateVisa={visa} stateVipps={vipps} stateCash={cash} />
                                        ) : (null)}
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            id="disable-button"
                                            color="secondary"
                                            variant="contained"
                                            autoFocus
                                            onClick={() => {
                                                setProducts([]);
                                                handleOrderClose();
                                                handleDeliveryClose();
                                                handleCloseCash();
                                                handleCloseVipps();
                                                handleCloseVisa();
                                                handleFinishOpen();
                                                handleShowPaymentClose();
                                                removeButton();
                                            }}
                                        >
                                            Utfør
                                        </Button>
                                    </DialogActions>
                                    {finish ? (
                                        <Grid container spacing={1} sx={{ maxWidth: 420 }} style={{ marginBottom: "8%" }}>
                                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                                <Typography variant="h6">
                                                    Takk for din bestilling!
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                                <Typography>
                                                    Ditt ordrenummer er # {Math.floor(Math.random() * 10000)}
                                                </Typography>
                                                <Typography>
                                                    Du har mottatt en sms med informasjon.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ) : (null)}
                                </Box>)}
                            </>
                        )}
                    </BootstrapDialog>
                </>
            )}
        </div>
    );
}


