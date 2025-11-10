'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function MarketplaceSection() {
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 6 }, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          {/* Columna Izquierda: Texto y Botones */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 1 } }}>
            <Typography variant="h6" sx={{ color: '#ff6f00', fontWeight: 'bold' }}>
              Quiero comprar y vender recursos por mi cuenta<span style={{ color: '#4CAF50' }}>.</span>
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 1, color: '#4d2a00' }}>
            El marketplace de sostenibilidad para una nueva generación de empresas<span style={{ color: '#4CAF50' }}>.</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Descubre nuevas oportunidades de reciclaje y abastecimiento de materiales en el mercado de reciclaje más grande de la región. La plataforma gratuita de T3 te conecta con comerciantes y recicladores de confianza.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Únete a nuestra plataforma de forma gratuita y explora potentes herramientas que apoyan tus objetivos de sostenibilidad.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                component={Link}
                href="/marketplace"
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
                Explorar Marketplace
              </Button>
              <Button
                variant="outlined"
                component={Link}
                href="/empresas"
                sx={{
                  borderColor: '#000000',
                  color: '#000000',
                  '&:hover': { borderColor: '#000000', backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                }}
              >
                Encontrar un Socio
              </Button>
            </Box>
          </Box>

          {/* Columna Derecha: Imagen */}
          <Box sx={{ flex: 1, order: { xs: 2, md: 2 } }}>
            <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
              <Image
                src="/marketplace-preview.png"
                alt="Vista previa del marketplace de T3"
                width={600}
                height={450}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: 'none',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

