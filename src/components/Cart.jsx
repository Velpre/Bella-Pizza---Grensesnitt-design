import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
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

    const { products } = useContext(UserContext);

    console.log(products);

    if (products !== 0) {
        let product = products.map(products => ({
            
        }))
    }


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
                            <ProductCartCard />

                        </DialogContent>
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
                    <BootstrapDialog className={classes.desktopScroll}
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Modal title
                        </BootstrapDialogTitle>
                        <DialogContent dividers>



                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Save changes
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </>

            )}
        </div>)
}

