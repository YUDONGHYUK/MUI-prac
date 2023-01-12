import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';

/*  TextField
  label: the label content
  variant: outlined(default), filled, standard
  size: small, medium
  required: add asterisk(*) to label content
  helperText: add help text to the input
  type: correspond to the type attribute of an input element
  disabled: components is disabled
  inputProps:
    {readOnly: true} - the field value you can make it readonly
  SelectProps:
    { multiple: true } - you can select multiple
  selsect: render a select element
  fullWidth: input will take up the full width of its container
*/

export default function MuiTextField() {
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Small secondary' size='small' color='secondary' />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField
          label='Form Input'
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? 'Required' : 'Do not share your password with anyone'
          }
        />
        <TextField
          label='Password'
          type='password'
          helperText='Do not share your password with anyone'
          disabled
        />
        <TextField label='Read only' inputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}
