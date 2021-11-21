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
  ListItemIcon,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useContext } from "react";
import { UserContext } from "../App";

import Cart from "./Cart";

// IMPORTING ICONS
import MenuIcon from "@mui/icons-material/Menu";

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
    left: "90%",
  },
}));

const Navbar = (props) => {
  const { value, setValue } = useContext(UserContext);

  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  // set product     onClick={() => setValue(value + 1)}

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Toolbar style={{ boxShadow: "none" }}>
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
              <Button style={{ color: "white" }}>
                <div />
                <Cart />
              </Button>
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
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
              >
                <MenuItem component={Link} to="/">
                  <ListItemIcon></ListItemIcon>
                  <Typography variant="h6"> Hjem</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/bestill-bord">
                  <ListItemIcon></ListItemIcon>
                  <Typography variant="h6"> Bestill bord </Typography>
                </MenuItem>
                <MenuItem component={Link} to="/meny">
                  <ListItemIcon></ListItemIcon>
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
              <Button>
                <NavHashLink
                  to="#about-us"
                  variant="text"
                  component={Link}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <div />
                  Om oss
                </NavHashLink>
              </Button>
              <Button>
                <NavHashLink
                  to="#contact-us"
                  variant="text"
                  component={Link}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Kontakt oss
                  <div />
                </NavHashLink>
              </Button>

              <Button style={{ color: "white" }}>
                <div />
                <Cart />
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
