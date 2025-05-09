import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const themeType = entry.target.getAttribute('data-theme');
            if (themeType) setTheme(themeType);
          }
        }
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const color = theme === 'dark' ? 'white' : 'black';

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 4,
        py: 2,
        backgroundColor: 'transparent',
        transition: 'color 0.3s ease',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '2rem',
          color,
          letterSpacing: '-1px',
        }}
      >
        Drama
      </Typography>

      <IconButton onClick={() => setOpen(true)} sx={{ color }}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {['about', 'portfolio', 'booking', 'contact'].map((id) => (
            <ListItem key={id} disablePadding>
              <ListItemButton onClick={() => handleScrollTo(id)}>
                <ListItemText primary={id.charAt(0).toUpperCase() + id.slice(1)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
