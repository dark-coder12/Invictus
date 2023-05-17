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
         
        <MenuItem value={"Software Engineering"}>Software Engineering</MenuItem>
        <MenuItem value={"Artificial Intelligence"}>Artificial Intelligence</MenuItem>
        <MenuItem value={"Data Science"}>Data Science</MenuItem>
        <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
        <MenuItem value={"Computer Engineering"}>Computer Engineering</MenuItem>
        <MenuItem value={"Electrical Engineering"}>Electrical Engineering</MenuItem>
        <MenuItem value={"Mechanical Engineering"}>Mechanical Engineering</MenuItem>
        <MenuItem value={"Civil Engineering"}>Civil Engineering</MenuItem>
        <MenuItem value={"Chemical Engineering"}>Chemical Engineering</MenuItem>
        <MenuItem value={"Business Administration"}>Business Administration</MenuItem>
        <MenuItem value={"Economics"}>Economics</MenuItem>
        <MenuItem value={"Accounting and Finance"}>Accounting and Finance</MenuItem>

      
        </Select>
      </FormControl>
    </Box>
  );
}
// import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// export default function SelectAutoWidth({ selectFor,setVal, flag }) {

//   const [selected,setSelected] = React.useState("")
//   const handleChange = (event) => {
//     setVal(event.target.value)
//     setSelected(event.target.value)
//     console.log(event.target.value);
//   };

//   const degree = ["Software Engineering", "Artifcial Intelligence"];
  
//   const institute = ["FAST", "LUMS", "NUST"];
//   return (
//     <div>
//       console.log(degree);
//       <FormControl  fullWidth>
//         <InputLabel id="demo-simple-select-label">{selectFor}</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={selected}
//           label="Selected"
//           onChange={handleChange}
//           style={{width:"100px", margin:"10px"}}
//         >
         
//          {
//           flag? 
//             <div>
//               <MenuItem value={"Fast"}>Fast</MenuItem>
//               <MenuItem value={"Fast"}>Fast</MenuItem>
//               <MenuItem value={"Fast"}>Fast</MenuItem>
//             </div>
//           :
//           <div>
//               <MenuItem value={"Fast"}>Fast</MenuItem>
//               <MenuItem value={"Fast"}>Fast</MenuItem>
//               <MenuItem value={"Fast"}>Fast</MenuItem>
//             </div>
//          }
         
//         </Select>
//     </FormControl>
//     </div>
//   );
// }

