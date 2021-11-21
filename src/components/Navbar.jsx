// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useContext } from "react";
import { UserContext } from "../App";
import TemporaryDrawer from "./DrawerMobile";

import Cart from "./Cart";
import BookTable from "./BookTable";
// IMPORTING ICONS

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root} id="top">
      <AppBar
        elevation={0}
        style={{
          backgroundColor: "#242424",
        }}
      >
        <Toolbar style={{ boxShadow: "none" }}>
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.title}
            style={{
              color: "#FFFFFF",
            }}
          >
            <Link to="/">
              <img
                src={"https://i.imgur.com/lxPZjiO.png"}
                alt={"Logo"}
                style={{
                  height: "1em",
                  width: "auto",
                  marginTop: "0.2em",
                  marginLeft: "1.8em",
                }}
              />
            </Link>
          </Typography>
          {isMobile ? (
            <>
              <Button style={{ color: "#000000" }}>
                <div />
                <Cart />
              </Button>
              <IconButton
                edge="start"
                aria-label="menu"
                style={{ color: "#FFFFFF" }}
              >
                <div />

                <TemporaryDrawer />
              </IconButton>
            </>
          ) : (
            <div style={{ marginRight: "2rem" }}>
              <Button component={Link} to="/" style={{ color: "#FFFFFF" }}>
                <div />
                Hjem
              </Button>
              <Button style={{ color: "#FFFFFF" }}>
                <div />
                <BookTable></BookTable>
              </Button>
              <Button component={Link} to="/meny" style={{ color: "#FFFFFF" }}>
                <div />
                Meny
              </Button>
              <Button>
                <NavHashLink
                  to="/#om-oss"
                  component={Link}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Om oss
                  <div />
                </NavHashLink>
              </Button>
              <Button>
                <NavHashLink
                  to="/#kontakt-oss"
                  component={Link}
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  Kontakt oss
                  <div />
                </NavHashLink>
              </Button>

              <Button>
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
