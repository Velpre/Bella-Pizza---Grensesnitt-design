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

/* Style i bakgrunnen */
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

/* Style inn i modalen */
const style = {
  p: 2,
  px: 4,
  pb: 3,
};

export default function BookTable() {
  /* Modal */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* Number of persons */
  const [number, setNumber] = React.useState("");

  const handleChange = (event) => {
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
        <Box className="book-table-box" sx={style}>
          <h2>Reserver bord</h2>
          <FormControl>
            <InputLabel>Antall personer</InputLabel>
            <Select
              value={number}
              label="Antall personer"
              onChange={handleChange}
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

            <TextField id="outlined-basic" label="Navn" variant="outlined" />
            <TextField id="outlined-basic" label="E-post" variant="outlined" />
            <Date></Date>
            <Time></Time>

            <Button>Reserver</Button>
          </FormControl>
        </Box>
      </StyledModal>
    </div>
  );
}
