import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, MenuItem, Box, Drawer } from "@material-ui/core";
import { NavHashLink } from "react-router-hash-link";
import BookTable from "./BookTable";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ p: 5 }}
    >
      <MenuItem component={NavHashLink} to="/#top">
        <Typography variant="h6"> HJEM</Typography>
      </MenuItem>
      <MenuItem component={NavHashLink} to="/meny#top">
        <Typography variant="h6">MENY</Typography>
      </MenuItem>
      <MenuItem component={NavHashLink} to="/#om-oss">
        <Typography variant="h6">OM OSS</Typography>
      </MenuItem>
      <MenuItem component={NavHashLink} to="/#kontakt-oss">
        <Typography variant="h6">KONTAKT OSS</Typography>
      </MenuItem>
    </Box>
  );

  const useStyles = makeStyles({
    paper: {
      width: "70%",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <React.Fragment key={"left"}>
        <MenuIcon onClick={toggleDrawer("left", true)}></MenuIcon>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          classes={{ paper: classes.paper }}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
