import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

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

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt='basktball' className='img' />
          <Box paddingX={1}>
            <Typography variant='subtitle1' component='h2'>
              {tour.name}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ width: 12.5 }} />
              <Typography variant='bold2' component='p'>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }} mt={3.5}>
              <Rating
                name='read-only'
                value={tour.rating}
                precision={0.25}
                size='small'
                readOnly
              />
              <Typography variant='bold2' component='p' marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant='bold3' component='p' ml={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h3' mt={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
