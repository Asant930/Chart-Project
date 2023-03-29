import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

export default function Toggle() {
  return (
    <ToggleButtonGroup exclusive color="primary">
      <ToggleButton value="full">Full Phase</ToggleButton>
      <ToggleButton value="8h">Last 8H</ToggleButton>
      <ToggleButton value="4hr">Last 4H</ToggleButton>
      <ToggleButton value="2h">Last 2H</ToggleButton>
    </ToggleButtonGroup>
  );
}
