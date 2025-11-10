'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Container,
} from '@mui/material';
import Image from 'next/image'; // Usamos el componente de Next.js para optimizar imágenes

const industries = [
  'Manufactura',
  'Producción de Metales',
  'Producción de Vidrio',
  'Comida y Bebidas',
  'Retail y Almacenes',
  'Construcción y Demolición',
  'Horeca y Turismo',
];

export default function ConsultingSection() {
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 6 }, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          {/* Columna Izquierda: Texto y Botones */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 1 } }}>
            <Typography variant="h6" sx={{ color: '#ff6f00', fontWeight: 'bold' }}>
              Busco ayuda con mi circularidad<span style={{ color: '#f44336' }}>.</span>
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 1, color: '#4d2a00' }}>
              Consultoría T3<span style={{ color: '#f44336' }}>.</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Optimiza tu gestión de residuos con servicios de consultoría a medida, desde el Análisis Circular de Residuos hasta el Sourcing Verde. Te ayudamos a reducir costos, potenciar la eficiencia de los recursos y alcanzar el pleno cumplimiento normativo. Convierte tus metas de sostenibilidad en un éxito medible con nuestro enfoque innovador y circular.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#4d2a00' }}>
              Encuentra casos de estudio para tu industria:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {industries.map((industry) => (
                <Chip key={industry} label={industry} variant="outlined" component="a" href="#" clickable />
              ))}
            </Box>

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
                Hablar con Expertos
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#000000',
                  color: '#000000',
                  '&:hover': { borderColor: '#000000', backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                }}
              >
                Saber Más
              </Button>
            </Box>
          </Box>

          {/* Columna Derecha: Imagen */}
          <Box sx={{ flex: 1, order: { xs: 2, md: 2 } }}>
            <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
              <Image
                src="/consulting-diagram.png"
                alt="Diagrama de consultoría de economía circular"
                width={600}
                height={400}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

