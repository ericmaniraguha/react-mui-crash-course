import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordian';

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant='3' component='h1' mt={3}>
      Explore the World in Kigali
    </Typography>
    <Box marginTop={3} sx={{ display: 'flex' }}>
      <img
        src='https://cdn.getyourguide.com/img/tour/5eba9b246bb9a.jpeg/145.jpg'
        alt=''
        height={325}
      />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant='h6' component='h4' mt={3}>
        Why you should visit Kigali?
      </Typography>
      <Typography variant='paragraph' component='p' mt={3}>
        Kigali is clean, safe and filled with enlightening cultural experiences
        from world-class modern art galleries to fashion, local crafts and even
        a coffee co-op run by women making the world's best coffee. Who should
        go? Adventurous, curious, eco-conscious travelers and conservationists.
      </Typography>
    </Box>

    <Box>
      <Typography variant='h6' component='h4' mt={3} mb={2}>
        Frequently Asked Questions about Kigali and Is Kigali a good place to
        live?
      </Typography>
      <CustomizedAccordions />
    </Box>
  </Container>
);

export default Tour;
