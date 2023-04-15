import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function ReadRating() {
  const [value, setValue] = React.useState(4);

  return (
    <Box sx={{ '& .MuiRating-iconEmpty': { color: '#FBBF24' } }}>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}
