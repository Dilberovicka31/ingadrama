import { Box, Typography, Container } from '@mui/material';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';

export default function About() {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 6,
          flexWrap: 'wrap',
        }}
      >
        {/* Text Column */}
        <Box sx={{ flex: 1, minWidth: 300, maxWidth: 500 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              mb: 2,
            }}
          >
            About Me
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.8 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet cursus enim, at placerat sem. Fusce fermentum neque at purus luctus, ut cursus lorem blandit. Quisque sed luctus justo. Curabitur sagittis libero a sem tempor, a fermentum turpis iaculis. Integer vitae justo sapien. Donec dignissim finibus lorem, non malesuada urna imperdiet sed.
          </Typography>
        </Box>

        {/* Collage */}
        <Box
          sx={{
            flex: 1,
            minWidth: 300,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
          }}
        >
          <Box
            sx={{
              height: 280,
              backgroundImage: `url(${about1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              height: 130,
              backgroundImage: `url(${about2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              height: 130,
              backgroundImage: `url(${about3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              height: 280,
              backgroundImage: `url(${about4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}