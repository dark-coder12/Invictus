import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BlogModal from './BlogModal';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Blog({blogName,description,imgSrc}) {
  return (
    
    <Card className='hover:bg-none hover:bg-opacity-50 gradientHover cursor-pointer hover:font-[600]' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 100, width:"auto" }}
        image={imgSrc}
        title="green iguana"
      />
      <CardContent className='text-white min-h-25 max-h-25'>
        <Typography gutterBottom variant="h5" component="div">
          {blogName}
        </Typography>
        <Typography variant="body2" color="">
         {description}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button size="small" sx={{color:"white"}} >
          <FavoriteIcon/>
          33
        </Button>
        <BlogModal imgSrc={imgSrc} blogName={blogName} description={description}/>
      </CardActions>
    </Card>
  );
}
