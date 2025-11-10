import React from 'react';
import {
  Box,
  Container,
  Link,
  Typography,
  IconButton,
  Divider,
  Rating,
} from '@mui/material';
// Importa los íconos de redes sociales
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#dbd9d9',
        color: 'text.secondary',
        padding: '32px 0',
        fontSize: '0.875rem',
      }}
    >
      <Container maxWidth="lg">
        {/* Sección de enlaces superiores */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 3,
          }}
        >
          <Link 
            href="/terminos-y-condiciones" 
            sx={{ 
              margin: '0 12px', 
              color: 'text.primary', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            TÉRMINOS Y CONDICIONES
          </Link>
          <Link 
            href="/privacidad" 
            sx={{ 
              margin: '0 12px', 
              color: 'text.primary', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            PRIVACIDAD
          </Link>
          <Link 
            href="/politica-de-cookies" 
            sx={{ 
              margin: '0 12px', 
              color: 'text.primary', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            POLÍTICA DE COOKIES
          </Link>
        </Box>

        <Divider sx={{ marginBottom: 3 }} />

        {/* Sección de reseñas */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography component="span" fontWeight="bold" sx={{ mr: 1 }}>
                4.8
              </Typography>
              <Rating name="read-only" value={4.8} precision={0.1} readOnly />
            </Box>
            <Typography variant="body2">Basado en 45 Reseñas de Google</Typography>
          </Box>
        </Box>

        <Divider sx={{ marginBottom: 3 }} />

        {/* Sección de información de la empresa y redes sociales */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'center' }}>
          <Box sx={{ flex: { xs: '1', md: '1' } }}>
            <Typography variant="body2" fontWeight="bold">
              Transforma3, S.A.S.
            </Typography>
            <Typography variant="body2">
              Carrera 7 #71-21, Torre B, Piso 10, Bogotá, Colombia
            </Typography>
            <Typography variant="body2">
              NIT: 901.123.456-7
            </Typography>
          </Box>
          <Box sx={{ flex: { xs: '1', md: '1' }, textAlign: { xs: 'left', md: 'right' }, mt: { xs: 2, md: 0 } }}>
            <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube">
              <YouTubeIcon />
            </IconButton>
            <Link
              href="mailto:info@transforma3.com"
              display="block"
              sx={{ mt: 1, textDecoration: 'none', color: 'inherit' }}
            >
              info@transforma3.com
            </Link>
          </Box>
        </Box>

        {/* Sección de Copyright */}
        <Typography variant="body2" align="center" sx={{ marginTop: 4 }}>
          Copyright 2025-{new Date().getFullYear()} Transforma3
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;