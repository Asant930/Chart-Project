import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";

export default function Checkboxes() {
  return (
    <FormGroup>
      <Stack direction="row" width="100%" spacing={2} padding={3}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Predicted flux"
          labelPlacement="end"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Dynamic control limits"
          labelPlacement="end"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Static control limits"
          labelPlacement="end"
        />
      </Stack>
    </FormGroup>
  );
}
