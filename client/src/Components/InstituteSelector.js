import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DegreeSelector({ selectFor,setVal }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    setVal(event.target.value);
  };
  const degree = ["Software Engineering", "Artifcial Intelligence"];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{selectFor}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
         
        <MenuItem value={"FAST-NUCES"}>FAST-NUCES</MenuItem>
        <MenuItem value={"LUMS"}>LUMS</MenuItem>
        <MenuItem value={"NUST"}>NUST</MenuItem>
        <MenuItem value={"GIKI"}>GIKI</MenuItem>
        <MenuItem value={"UET"}>UET</MenuItem>
        <MenuItem value={"NED"}>NED</MenuItem>
        <MenuItem value={"PIEAS"}>PIEAS</MenuItem>
        <MenuItem value={"COMSATS"}>COMSATS</MenuItem>
        <MenuItem value={"IBA"}>IBA</MenuItem>
        <MenuItem value={"IB&M"}>IB&M</MenuItem>      
        </Select>
      </FormControl>
    </Box>
  );
}
