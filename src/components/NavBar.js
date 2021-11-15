// IMPORTING APIS
import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Button,
    useScrollTrigger,
    Slide,
    Menu,
    MenuItem,
    ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS



// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)

    },
    title: {
        flexGrow: 1,
    }
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    return (
        <div className={classes.root} >
            <HideOnScroll {...props}>
                <BrowserRouter>
                    <AppBar style={{ backgroundColor: 'transparent', height: '10%' }}>
                        <Toolbar >
                            <Typography
                                variant="h5"
                                component="p"
                                color="textSecondary"
                                className={classes.title}
                            >
                                Pizza
                            </Typography>
                            {isMobile ? (
                                <>
                                    <IconButton
                                        color="textPrimary"
                                        className={classes.menuButton}
                                        edge="start"
                                        aria-label="menu"
                                        onClick={handleMenu}
                                    >
                                        Mobile
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchor}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        KeepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        open={open}
                                    >
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/"
                                        >
                                            <ListItemIcon>
                                                <div>Here</div>
                                            </ListItemIcon>
                                            <Typography variant="h6"> Hjem</Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/"
                                        >
                                            <ListItemIcon>


                                            </ListItemIcon>
                                            <Typography variant="h6"> Bestill bord </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/About"
                                        >
                                            <ListItemIcon>
                                            </ListItemIcon>
                                            <Typography variant="h6"> Meny</Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/Personal"
                                        >
                                            <ListItemIcon>
                                                <div>Hello</div>
                                            </ListItemIcon>
                                            <Typography variant="h6"> Cart </Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <div style={{ marginRight: "2rem"}}>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/"
                                        color="default"
                                    >
                                        <div />
                                        Hjem
                                    </Button>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/bestill-bord"
                                        color="default"
                                    >
                                        <div />
                                        Bestill bord
                                    </Button>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/meny"
                                        color="default"
                                    >
                                        <div />
                                        Meny
                                    </Button>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/om-oss"
                                        color="default"
                                    >
                                        <div />
                                        Om oss
                                    </Button>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/handlekurv"
                                        color="default"
                                    >
                                        <div />
                                        Cart
                                    </Button>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>

                </BrowserRouter>
            </HideOnScroll>
        </div>
    );
};

export default Navbar;
