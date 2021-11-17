import React from "react";
import {
  TextField,
  Box,
  styled,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";

import ModalUnstyled from "@mui/base/ModalUnstyled";
import Date from "./Date";
import Time from "./Time";

/* CSS import */
import "../style-first-page.css";

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
`;
/* Style behind modal */
const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
/* Style inside modal */
const styleModalInside = {
  p: 2,
  px: 4,
  pb: 3,
  textAlign: "center",
  bgcolor: "white",
};

export default function BookTable() {
  /* Modal open and close */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* Number of persons */
  const [number, setNumber] = React.useState("");

  const handleChangeNumberPersons = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Bestill bord
      </button>

      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={styleModalInside}>
          <h2>Reserver bord</h2>
          <FormControl>
            <InputLabel>Antall personer</InputLabel>
            <Select
              margin="dense"
              value={number}
              label="Antall personer"
              onChange={handleChangeNumberPersons}
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
            />
            <TextField
              margin="dense"
              required
              label="E-post"
              variant="outlined"
            />
            <Date></Date>
            <Time></Time>

            <TextField
              label="Komentar"
              multiline
              rows={3}
              defaultValue=""
              margin="dense"
            />
            <Button>Reserver</Button>
          </FormControl>
        </Box>
      </StyledModal>
    </div>
  );
}
