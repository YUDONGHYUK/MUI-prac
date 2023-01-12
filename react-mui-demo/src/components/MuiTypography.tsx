import { Typography } from '@mui/material';

// varient(10): h1 ~ h6, subtitle1, subtitle2, body1, body2
// component: change the semantic element
// gutterBottom: text will have a bottom margin

export default function MuiTypography() {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>Sub title 1</Typography>
      <Typography variant='subtitle2'>Sub title 2</Typography>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        excepturi, officia unde magnam repellendus voluptatem dolore nemo sequi
        tempora soluta libero doloribus minus. Molestias dicta inventore aperiam
        eius tempora? Sint.
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum itaque
        eaque odio quo autem ipsum laborum cupiditate praesentium error velit.
        Eveniet quidem sequi soluta dolorem sint excepturi nulla placeat quo!
      </Typography>
    </div>
  );
}
