import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAutoWidth({ selectFor, flag }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const degree = ["Software Engineering", "Artifcial Intelligence"];
  const institute = ["FAST", "LUMS", "NUST"];
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {selectFor}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {flag === true
            ? degree.map((d) => <MenuItem value="">{d}</MenuItem>)
            : institute.map((d) => <MenuItem value="">{d}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}
