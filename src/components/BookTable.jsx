import React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import TextField from "@mui/material/TextField";
/* Date-picker */
/* import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker"; */

/* CSS */
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(null);

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
        <Box className="test" sx={style}>
          <h2>Reserver bord</h2>
          <TextField id="outlined-basic" label="Navn" variant="outlined" />
          <TextField id="outlined-basic" label="E-post" variant="outlined" />
        </Box>
      </StyledModal>
    </div>
  );
}
