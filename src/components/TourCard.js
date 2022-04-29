import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'bold2',
          },
          style: {
            fontSize: 11,
          },
        },

        {
          props: {
            variant: 'bold3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = () => {
  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/7/72/Basketball_Clipart.svg'
            alt='basktball'
            className='img'
          />
          <Box paddingX={1}>
            <Typography variant='subtitle1' component='h2'>
              Basktball Game
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ width: 12.5 }} />
              <Typography variant='bold2' component='p'>
                5 hours
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }} mt={3.5}>
              <Rating
                name='read-only'
                value={4.5}
                precision={0.25}
                size='small'
                readOnly
              />
              <Typography variant='bold2' component='p' marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant='bold3' component='p' ml={1.5}>
                (655 reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h3' mt={0}>
                From C $451
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
