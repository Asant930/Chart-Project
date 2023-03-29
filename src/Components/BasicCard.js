import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import { useState } from "react";

export default function BasicCard({ filterSelections }) {
  console.log(filterSelections);
  const { vessel, product, batch } = filterSelections;

  return (
    <>
      <Grid item xs={3}>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 16 }}>Vessel</Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary">
              {vessel}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 16 }}>Product</Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary">
              {product}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 16 }}>Batch</Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary">
              {batch}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card
          variant="outlined"
          sx={{ minWidth: 275 }}
          style={{ backgroundColor: "#D3D3D3" }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 16 }}>Batch RMSE</Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary">
              2.0875
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
