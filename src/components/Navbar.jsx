// IMPORTING APIS
import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Button,
    Menu,
    MenuItem,
    ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";


// IMPORTING ICONS
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),


    },
    title: {
        flexGrow: 1,
    }
}));



const Navbar = (props) => {

    const navigate = useNavigate();
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };

    const scrollToSection = () => {
        let titleElement = document.getElementsByClassName('contact-section');

        if (typeof (titleElement[0]) !== 'undefined') {
            titleElement[0].scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate("/", "#kontakt-oss");

        }
    }



    return (
        <div className={classes.root} >
            <AppBar style={{
                backgroundColor: 'transparent'
            }}>
                <Toolbar >
                    <Typography
                        variant="h5"
                        component="p"
                        color="textSecondary"
                        className={classes.title}
                        style={{
                            color: 'white'
                        }}
                    >
                        Pizza
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                onClick={() => setAnchor(null)}
                                component={Link}
                                to="/#handlekurv"

                            >
                                <ListItemIcon>
                                    <ShoppingCartIcon style={{ color: "white" }}
                                    />
                                </ListItemIcon>
                            </IconButton>
                            <IconButton
                                className={classes.menuButton}
                                edge="start"
                                aria-label="menu"
                                onClick={handleMenu}
                                style={{ color: "white" }}

                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchor}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}

                            >

                                <MenuItem
                                    component={Link}
                                    to="/"
                                >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <Typography variant="h6"> Hjem</Typography>
                                </MenuItem>
                                <MenuItem
                                    component={Link}
                                    to="/bestill-bord"
                                >
                                    <ListItemIcon>


                                    </ListItemIcon>
                                    <Typography variant="h6"> Bestill bord </Typography>
                                </MenuItem>
                                <MenuItem
                                    component={Link}
                                    to="/meny"
                                >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <Typography variant="h6"> Meny</Typography>
                                </MenuItem>
                            </Menu>
                        </>

                    ) : (
                        <div style={{ marginRight: "2rem" }}>
                            <Button
                                variant="text"
                                component={Link}
                                to="/"
                                style={{ color: "white" }}
                            >
                                <div />
                                Hjem
                            </Button>
                            <Button
                                variant="text"
                                component={Link}
                                to="/bestill-bord"
                                style={{ color: "white" }}

                            >
                                <div />
                                Bestill bord
                            </Button>
                            <Button
                                variant="text"
                                component={Link}
                                to="/meny"
                                style={{ color: "white" }}

                            >
                                <div />
                                Meny
                            </Button>
                            <Button
                                variant="text"
                                component={Link}
                                to="/om-oss"
                                style={{ color: "white" }}
                            >
                                <div />
                                Om oss
                            </Button>
                            <Button>
                                <NavHashLink

                                    to="/#kontakt-oss"
                                    variant="text"
                                    component={Link}
                                    style={{ color: "white", textDecoration: "none" }}
                                >Kontakt oss
                                    <div />

                                </NavHashLink>
                            </Button>

                            <Button
                                variant="text"
                                component={Link}
                                to="/handlekurv"
                                style={{ color: "white" }}
                            >
                                <div />
                                <ShoppingCartIcon />
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div >

    );
};

export default Navbar;
