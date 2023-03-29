import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flux Prediction and Control Limits
          </Typography>
          <Button color="inherit">Flux Prediction</Button>
          <Button color="inherit">Anomaly List</Button>
          <Button color="inherit">Scoring</Button>
          <Button color="inherit">Filter Resistance</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
