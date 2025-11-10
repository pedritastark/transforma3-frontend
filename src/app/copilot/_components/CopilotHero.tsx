'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';

export default function CopilotHero() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden', // Asegura que nada se desborde
      }}
    >
      {/* Caja para el fondo. La imagen se pone aquí, separada del contenido. */}
      <Box
        component="img"
        // La ruta a las imágenes en la carpeta /public es directa desde la raíz.
        src="../../copilot-bg.gif" 
        alt="Fondo animado del copiloto de residuos"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1, // Se envía al fondo
          filter: 'brightness(0.5)', // Oscurece la imagen para que el texto resalte
        }}
      />

      {/* Contenedor para el contenido, que ahora es hermano de la imagen de fondo */}
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
          Copilot: Servicio de Gestión de Residuos
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
          Reduce costos, aumenta la transparencia y logra mejoras continuas con el Copiloto T3.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#ff6f00',
            color: 'white',
            '&:hover': { backgroundColor: '#e66000' },
            fontWeight: 'bold',
            boxShadow: 'none',
          }}
        >
          Agenda una Consulta Gratis
        </Button>
        <Typography variant="body2" sx={{ mt: 4, fontStyle: 'italic' }}>
        </Typography>
      </Container>
    </Box>
  );
}

