import DropDown from "./Components/DropDown";
import Grid from "@mui/material/Grid";
import Navbar from "./Components/Navbar";
import BasicCard from "./Components/BasicCard";
import Toggle from "./Components/Toggle";
import Checkboxes from "./Components/Checkboxes";
import { useState } from "react";
import { UserData } from "./Data";
import LineChart from "./Components/LineChart";

function App() {
  const [vessel, setVessel] = useState("");
  const [product, setProduct] = useState("");
  const [batch, setBatch] = useState("");
  const [filterSelections, setFilterSelections] = useState({
    vessel: "",
    product: "",
    batch: "",
  });

  const handleVesselChange = (event) => {
    setVessel(event.target.value);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleBatchChange = (event) => {
    setBatch(event.target.value);
  };

  const handleSubmit = () => {
    const filters = {
      vessel,
      product,
      batch,
    };
    console.log({ filters });

    setFilterSelections(filters);

    setVessel("");
    setProduct("");
    setBatch("");
  };

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <>
      <Navbar />
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <DropDown
          vessel={vessel}
          product={product}
          batch={batch}
          handleVesselChange={handleVesselChange}
          handleProductChange={handleProductChange}
          handleBatchChange={handleBatchChange}
          handleSubmit={handleSubmit}
        />
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <BasicCard filterSelections={filterSelections} />
      </Grid>
      <Grid container justifyContent="flex-end">
        <Toggle />
      </Grid>
      <LineChart chartData={userData} />
      <Checkboxes />
    </>
  );
}

export default App;
