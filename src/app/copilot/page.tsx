'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import Image from 'next/image';
import CopilotHero from './_components/CopilotHero';
import WhyChooseCopilot from './_components/WhyChooseCopilot';
import SolutionSection from './_components/SolutionSection';
import ReportingSection from './_components/ReportingSection';



// --- SECCIÓN 5: LLAMADA A LA ACCIÓN FINAL ---
const FinalCTA = () => (
  <Box sx={{ py: 8, textAlign: 'center' }}>
    <Container maxWidth="sm">
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Permite que el Copiloto T3 simplifique tu gestión de residuos con un servicio que reduce costos, asegura la equidad e impulsa la mejora continua.
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>+57 300 123 4567</Typography>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>info@transforma3.co</Typography>
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
        Consulta Gratuita
      </Button>
    </Container>
  </Box>
);

export default function CopilotPage() {
  return (
    <div style={{ marginTop: '-64px' }}>
      <CopilotHero />
      <WhyChooseCopilot />
      <SolutionSection />
      <ReportingSection />
      <FinalCTA />
    </div>
  );
}

