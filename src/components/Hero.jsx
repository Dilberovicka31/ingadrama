import { Box, Typography } from '@mui/material';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';

export default function Hero() {
  return (
    <Box sx={{ height: '100%', display: 'flex', overflow: 'hidden' }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${hero1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${hero2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              letterSpacing: '-1px',
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.6)',
            }}
          >
            Inga Drama
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
