import React from "react";
/* Hooks */
import { useState } from "react";
/* MUI */
import {
  TextField,
  Box,
  styled,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Grid,
} from "@mui/material";
import { ArrowForwardIos, Cancel } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import ModalUnstyled from "@mui/base/ModalUnstyled";
/* Components */
import Date from "./Date";
import Time from "./Time";
/* Css */
import "../css/BookTable.css";

/* Style behind modal */
const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-tap-highlight-color: transparent;
`;

/* Style modal */
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
/* Style inside modal */
const styleModalInside = {
  p: 2,
  px: 4,
  pb: 3,
  textAlign: "center",
  bgcolor: "white",
  borderRadius: "20px",
  position: "relative",
};

export default function BookTable() {
  /* Modal open and close */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* Number of persons */
  const [numberError, setNumberError] = useState(false);
  const [number, setNumber] = useState("");

  /* Name */
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  /* E-mail */
  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState(false);

  //Submit - Jobbe videre

  const handleSubmit = (e) => {
    console.log(e);
  };

  /* console.log(number); */

  return (
    <div>                         {/**BRUKES IKKE ?? */}
      <Button id="bookTable-btn" /*className="btn-style"*/ type="button" onClick={handleOpen}>
        Bestill bord
      </Button>

      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={styleModalInside}>
          <IconButton id="cancel-icon-bookTable" onClick={handleClose}>
            <Cancel></Cancel>
          </IconButton>

          <h2>Bestill bord</h2>
          <FormControl onSubmit={handleSubmit}>
            <InputLabel>Antall personer</InputLabel>
            <Select 
              margin="dense"
              value={number}
              label="Antall personer"
              onChange={(e) => setNumber(e.target.value)}
              fullWidth
              required
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>

            <TextField
              margin="dense"
              required
              label="Navn"
              variant="outlined"
              error={nameError}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              margin="dense"
              required
              label="E-post"
              variant="outlined"
              error={mailError}
              onChange={(e) => setMail(e.target.value)}
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

            <TextField
              label="Kommentar"
              multiline
              rows={3}
              defaultValue=""
              margin="dense"
              fullWidth
            />
            <Button
              id="reserver-btn"
              endIcon={<ArrowForwardIos />}
              variant="contained"
              size="large"
              type="button"
            >
              Reserver
            </Button>
          </FormControl>
        </Box>
      </StyledModal>
    </div>
  );
}
