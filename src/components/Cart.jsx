import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProductCartCard from "./ProductCartCard"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { UserContext } from "../App";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(1),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    }
}));


const useStyles = makeStyles((theme) => ({
    desktop: {
        '& .MuiDialogContent-root': {
            padding: theme.spacing(1),
            left: "100%"
        },
    },
    desktopMain: {
        "& .MuiDialog-container": {
            height: 750
        },
    },
    desktopScroll: {
        "& .MuiDialog-scrollPaper": {
            alignItems: 'flex-start',
            justifyContent: 'right'

        },
    },
    mobile: {
        '& .MuiDialogContent-root': {
            padding: theme.spacing(1),
        },
    },
    mobileScroll: {
        "& .MuiDialog-scrollPaper": {
            alignItems: 'flex-start',
            justifyContent: 'center'
        },
    }
}));


const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    const classes = useStyles();


    return (
        <DialogTitle
            sx={{ mt: 0 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
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

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const { products, setProducts } = useContext(UserContext);

    function deleteFromCart(prop) {
        const filteredProducts = products.filter((product) => product.id !== prop.id)
        setProducts(filteredProducts);


    }
    let price = 0;
    if (products !== 0) {
        let prices = [];
        prices = products.map((product) => {
            return parseInt(product.quantity) * parseInt(product.price)
        })

        prices.forEach(e => {
            price += e;
        });
    }

    let product;
    if (products !== 0) {
        product = products.map((product, index) => {
            return <ProductCartCard product={product} deleteProduct={deleteFromCart} />
        })
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
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));





    return (
        <div>
            {isMobile ? (

                <>
                    <Badge badgeContent={products.length} color="primary" onClick={handleClickOpen}>
                        <ShoppingCartIcon color="action" style={{ color: "white" }}
                        />
                    </Badge>
                    <BootstrapDialog style={{ overflow: 'auto' }} className={classes.mobileScroll}
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Modal title
                        </BootstrapDialogTitle>
                        <DialogContent dividers>

                            {product}


                        </DialogContent>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 420 }} aria-label="customized table">
                                <TableHead>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            Totalt å betale
                                        </StyledTableCell>
                                        <StyledTableCell align="right" sx={{ pr: 4 }}>
                                            {price}{"kr"}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Save changes
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </>
            ) : (
                <>
                    <Badge badgeContent={products.length} color="primary" onClick={handleClickOpen}>
                        <ShoppingCartIcon color="action" style={{ color: "white" }}
                        />
                    </Badge>
                    <BootstrapDialog style={{ overflow: 'auto' }} className={classes.desktopScroll}
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Modal title
                        </BootstrapDialogTitle>
                        <DialogContent dividers>

                            {product}

                        </DialogContent>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 500 }} aria-label="customized table">
                                <TableHead>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            Totalt å betale
                                        </StyledTableCell>
                                        <StyledTableCell align="right" sx={{ pr: 4 }}>
                                            {price}{"kr"}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Save changes
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </>

            )
            }
        </div >)
}

