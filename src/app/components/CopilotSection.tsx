'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';

export default function CopilotSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 6, md: 10 },
        color: 'white',
        overflow: 'hidden', // Asegura que el GIF no se desborde
      }}
    >
      {/* GIF de Fondo */}
      <Box
        component="img"
        src="/copilot-bg.gif" // Ruta de tu GIF. Asegúrate de colocarlo en la carpeta public
        alt="Fondo del copiloto de residuos"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Cubre todo el espacio sin distorsionar
          zIndex: -1, // Envía el GIF al fondo
          filter: 'brightness(0.4)', // Oscurece un poco el GIF para que el texto resalte
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          {/* Columna Izquierda: Texto y Botones */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 1 } }}>
            <Typography variant="h6" sx={{ color: '#ff6f00', fontWeight: 'bold' }}>
              Necesito un socio en gestión de residuos<span style={{ color: '#f44336' }}>.</span>
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 1, color: 'white' }}>
              Copiloto de Residuos T3<span style={{ color: '#f44336' }}>.</span>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Deja que nos ocupemos de tu gestión de residuos con el Copiloto T3. Nuestro servicio práctico garantiza ahorros significativos, alianzas transparentes y mejoras innovadoras para tu estrategia.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Desde la logística y el cumplimiento de las últimas regulaciones hasta la prevención de residuos y el alineamiento con tus metas de sostenibilidad (ESG), estamos aquí para ayudarte a cumplir los más altos estándares en cada paso del camino.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff6f00',
                  color: 'white',
                  '&:hover': { backgroundColor: '#e66000' },
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  boxShadow: 'none',
                }}
              >
                Agendar una Llamada
              </Button>
              <Button
                variant="contained" // Cambiado a 'contained' para el fondo blanco
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  '&:hover': { backgroundColor: '#f2f2f2' },
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  boxShadow: 'none',
                }}
              >
                Saber Más
              </Button>
            </Box>
          </Box>

          {/* Columna Derecha: se deja vacía para que la imagen de fondo sea el foco */}
          <Box sx={{ flex: 1, order: { xs: 2, md: 2 } }}>
            {/* Espacio reservado, no necesita contenido */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

