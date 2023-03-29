import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function DropDown({
  vessel,
  product,
  batch,
  handleVesselChange,
  handleProductChange,
  handleBatchChange,
  handleSubmit,
}) {
  return (
    <>
      <Grid item xs={2}>
        <InputLabel id="demo-simple-select-label">Vessel</InputLabel>
        <Select
          placeholder="Select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vessel}
          label="Vessel"
          onChange={handleVesselChange}
        >
          <MenuItem value="First">First</MenuItem>
          <MenuItem value="Second">Second</MenuItem>
          <MenuItem value="Third">Third</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={2}>
        <InputLabel id="demo-simple-select-label-two">Product</InputLabel>
        <Select
          labelId="demo-simple-select-label-two"
          id="demo-simple-select-two"
          value={product}
          label="Product"
          onChange={handleProductChange}
        >
          <MenuItem value="Hello">Hello</MenuItem>
          <MenuItem value="Hola">Hola</MenuItem>
          <MenuItem value="Ciao">Ciao</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={2}>
        <InputLabel id="demo-simple-select-label-three">Batch</InputLabel>
        <Select
          labelId="demo-simple-select-label-three"
          id="demo-simple-select-three"
          value={batch}
          label="Batch"
          onChange={handleBatchChange}
        >
          <MenuItem value="Goodbye">Goodbye</MenuItem>
          <MenuItem value="Adios">Adios</MenuItem>
          <MenuItem value="Arrivederci">Arrivederci</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" onClick={handleSubmit}>
          Apply
        </Button>
      </Grid>
    </>
  );
}
