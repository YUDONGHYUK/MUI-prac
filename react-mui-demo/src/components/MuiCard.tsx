import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

export default function MuiCard() {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, dolores. Cupiditate cumque enim molestias nostrum
            voluptate vitae distinctio beatae odio qui voluptatum in, voluptas
            ad quaerat quae consequatur illum blanditiis.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
