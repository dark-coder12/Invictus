import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Blog({blogName,description,imgSrc}) {
  return (
    
    <Card className='hover:motion-safe:animate-spin hover:bg-none hover:bg-opacity-50 gradientHover cursor-pointer hover:font-[600]' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgSrc}
        title="green iguana"
      />
      <CardContent className='text-white'>
        <Typography gutterBottom variant="h5" component="div">
          {blogName}
        </Typography>
        <Typography variant="body2" color="">
         {description}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button size="small" sx={{color:"white"}} >Share</Button>
        <Button size="small" sx={{color:"white"}} >Learn More</Button>
      </CardActions>
    </Card>
  );
}
