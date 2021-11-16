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
  ListItemIcon,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
  },
  mobile: {
    // this is just an example, you can use vw, etc.
    textAlign: "center",
    height: "30px",
    backgroundColor: "red",
  },
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
    <div className={classes.root}>
      <BrowserRouter>
        <AppBar
          style={{
            backgroundColor: "transparent",
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="p"
              color="textSecondary"
              className={classes.title}
              style={{
                color: "white",
              }}
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
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/"
                  >
                    <ListItemIcon></ListItemIcon>
                    <Typography variant="h6"> Hjem</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/"
                  >
                    <ListItemIcon></ListItemIcon>
                    <Typography variant="h6"> Bestill bord </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/About"
                  >
                    <ListItemIcon></ListItemIcon>
                    <Typography variant="h6"> Meny</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/Personal"
                  >
                    <ListItemIcon></ListItemIcon>
                    <Typography variant="h6"> Cart </Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ marginRight: "2rem" }}>
                <Button
                  variant="text"
                  component={Link}
                  to="/"
                  color="white"
                  style={{ color: "white" }}
                >
                  <div />
                  Hjem
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/bestill-bord"
                  color="white"
                  style={{ color: "white" }}
                >
                  <div />
                  Bestill bord
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/meny"
                  color="white"
                  style={{ color: "white" }}
                >
                  <div />
                  Meny
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/om-oss"
                  color="default"
                  style={{ color: "white" }}
                >
                  <div />
                  Om oss
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  to="/handlekurv"
                  color="default"
                  style={{ color: "white" }}
                >
                  <div />
                  <ShoppingCartIcon />
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
