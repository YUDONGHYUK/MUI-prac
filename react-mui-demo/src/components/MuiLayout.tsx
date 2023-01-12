import { Box, Stack, Divider, Grid, Paper } from '@mui/material';
/* Box
  serves as a wrapper component for most of your CSS utility needs
  
  component: change the sementic tag(section, span, etc)
  sd: allows defining system overrides as well as additional CSS styles.
*/

/*  Grid
  The Grid component under the hood uses ths flexbox module
  THe Grid consists of 12 columns
  Each item in the grid can take up one or more colummns as its width
  There are five breakpoints each corresponding to a certain device width
  xs: mobile, sm: tablet, md: desktop, lg and xl: larger monitors
  We can assign integer values to each breakpoint which indicates how many of the 12 available
  column are occupied by that item when the viewport satisfies that breakpoint constraints.
*/

/*  Paper
  provides a visual hierarch

  elevation: control the shadow(default: 1)
*/

export default function MuiLayout() {
  return (
    <Paper sx={{ padding: '32px' }} elevation={4}>
      <Stack
        sx={{ border: '1px solid' }}
        direction='row'
        spacing={2}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          Doyu
        </Box>
        <Box
          display='flex'
          height='100px'
          width='100px'
          bgcolor='success.light'
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
