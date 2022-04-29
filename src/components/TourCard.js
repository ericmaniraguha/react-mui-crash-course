import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';

const TourCard = () => {
  return (
    <Grid item xs={3}>
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
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
