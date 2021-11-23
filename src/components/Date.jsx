import React from "react";
/* Hooks */
import { useState } from "react";
/* MUI */
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function Date() {
  const [value, setValue] = useState(null);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Velg dato"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              color="secondary"
              fullWidth
              required
              margin="dense"
              {...params}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
