import React, { useState } from 'react';
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

/*  Button
  varient: text, contained, outlined
    text: used when you have to grab less attention in the UI
    contained: used when you have to grab the user's attention
    outlined: sort of in between text and contained
  color: primary, secondary, error, warning, info, success
  size: small, medium, large
  startIcon: element placed before the children.
  endIcon: element placed after the children.
  disableElevation: remove shadow and disable elevation
  disableRipple: disable ripple when click the button
  onClick: handle the click event
*/

/*  ButtonGroup
  can be used to group related buttons.
  varient: text, contained, outlined
  orientation: can be displayed veritcally (virtical, horizontal)
  size: small, medium, large
  color: primary, secondary, error, warning, info, success
*/

/*  ToggleButton
  can be used to group related options
  value: associate with button when selected in a ToggleButtonGroup
*/

/*  ToggleButtonGroup
  value: currently selected value within the group or an array of selected values when exclusive is false.
  exclusive: ensure you can select only one option at a time.
  */

/*  Stack
  manages layout of immediate children along the vertical or horizontal axis
  direction: column(default), row
  spacing: control spcae between children
  display: flex(default), block etc..
*/

export default function MuiButton() {
  const [formats, setFormats] = useState<string | null>(null);

  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
      </Stack>

      <Stack direction='row' spacing={2} display='block'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Button
          variant='contained'
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('Clicked')}
        >
          Send
        </Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label='send' color='success' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction='row'>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='alignment button group'
        >
          <Button onClick={() => alert('Clicked Left')}>Left</Button>
          <Button onClick={() => alert('Clicked Center')}>Center</Button>
          <Button onClick={() => alert('Clicked Right')}>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction='row'>
        <ToggleButtonGroup
          aria-label='text formatting'
          value={formats}
          onChange={handleFormatChange}
          size='small'
          color='success'
          orientation='vertical'
          exclusive
        >
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underline' aria-label='underlilne'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
