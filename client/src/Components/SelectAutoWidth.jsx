import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAutoWidth({ selectFor,setVal, flag }) {

  const handleChange = (event) => {
    setVal(event.target.value)
  };

  const degree = ["Software Engineering", "Artifcial Intelligence"];
  
  const institute = ["FAST", "LUMS", "NUST"];
  return (
    <div>
      console.log(degree);
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">{selectFor}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Fast"}
          label="Age"
          onChange={handleChange}
          style={{width:"100px", margin:"10px"}}
        >
          {
            flag ? degree.forEach((item) => {
              console.log(item);
              <MenuItem value={item}>{item}</MenuItem>
            } ) : institute.map((item) => {
              <MenuItem value={item}>{item}</MenuItem>
            }
            )
          }
        
        </Select>
    </FormControl>
    </div>
  );
}
