import React, { useContext } from "react";
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
import Date from "./Date";
import Time from "./Time";
import ProductCartCard from "./ProductCartCard";
import Payment from "./Payment";

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
  desktop: {
    "& .MuiDialogContent-root": {
      padding: theme.spacing(1),
      left: "100%",
    },
  },
  desktopMain: {
    "& .MuiDialog-container": {
      height: 750,
    },
  },
  desktopScroll: {
    "& .MuiDialog-scrollPaper": {
      alignItems: "flex-start",
      justifyContent: "right",
    },
  },
  mobile: {
    "& .MuiDialogContent-root": {
      padding: theme.spacing(1),
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState(false);

  function handleChange() {
    if (state === false) setState(true);
    else setState(false);
  }

  const [delivery, setDelivery] = React.useState(false);

  function handleDeliveryChange() {
    if (delivery === false) setDelivery(true);
    else setDelivery(false);
  }

  const [payment, setPayment] = React.useState(false);

  function handlePaymentChange() {
    if (payment === false) setPayment(true);
    else setPayment(false);
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
          <Badge
            badgeContent={products.length}
            color="primary"
            onClick={handleClickOpen}
          >
            <ShoppingCartIcon color="action" style={{ color: "white" }} />
          </Badge>
          <BootstrapDialog
            style={{ overflow: "auto" }}
            className={classes.mobileScroll}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Modal title
            </BootstrapDialogTitle>
            <DialogContent dividers>{product}</DialogContent>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 420 }} aria-label="customized table">
                <TableHead></TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Totalt å betale
                    </StyledTableCell>
                    <StyledTableCell align="right" sx={{ pr: 4 }}>
                      {price}
                      {"kr"}
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
          <Badge
            badgeContent={products.length}
            color="primary"
            onClick={() => {
              handleClickOpen();
              setState(true);
            }}
          >
            <ShoppingCartIcon color="action" style={{ color: "white" }} />
          </Badge>
          <BootstrapDialog
            style={{ overflow: "auto" }}
            className={classes.desktopScroll}
            onClose={() => {
              handleClose();
              handleChange();
              handleDeliveryChange();
            }}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            {state ? (
              <Box>
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  Modal title
                </BootstrapDialogTitle>
                <DialogContent dividers>{product}</DialogContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead></TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          Totalt å betale
                        </StyledTableCell>
                        <StyledTableCell align="right" sx={{ pr: 4 }}>
                          {price}
                          {"kr"}
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <DialogActions>
                  <Button variant="contained"
                    autoFocus
                    onClick={() => {
                      handleChange();
                    }}
                    >
                    Til betaling
                  </Button>
                </DialogActions>
              </Box>
            ) : (
              <Box>
                {" "}
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  Din bestilling
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  {products.map((product) => {
                    return (
                      <Grid
                        container
                        spacing={2}
                        style={{ minWidth: 500, paddingBottom: "3%" }}
                      >
                        <Grid item xs={0.5} />
                        <Grid item xs={2}>
                          <Typography>{product.quantity + " x"}</Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Typography>{product.name}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography>{product.price + " kr"}</Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox onClick={handleDeliveryChange} />}
                      label="Hjemlevering"
                    />
                  </FormGroup>
                  {delivery ? (
                    <FormControl>
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
                    </FormControl>
                  ) : (
                    <div></div>
                  )}
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
                            {price}
                            {"kr"}
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </DialogContent>
                <DialogActions>
                  <Button variant="contained"
                    autoFocus
                    onClick={() => {
                      handleChange();
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
