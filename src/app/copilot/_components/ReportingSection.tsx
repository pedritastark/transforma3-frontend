'use client';
import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import Image from 'next/image';


export default function ReportingSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
        <Box sx={{ flex: 1 }}>  
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Reportes Completos y Transparencia Total en la Gestión de Residuos <span style={{ color: '#4CAF50' }}>.</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Proveemos datos detallados sobre los destinos de los residuos, métodos y cantidades, asegurando una visibilidad que va más allá de las estaciones de transferencia estándar. Nuestros reportes transparentes se integran fluidamente con informes ESG y sistemas de cumplimiento.
          </Typography>
           <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
            Con el Copiloto T3, también recibirás consultoría ambiental como parte de nuestro servicio, sin costo adicional.
          </Typography>
        </Box>
        <Box sx={{ flex: 1, width: '100%' }}>
          <Paper elevation={4} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
            <Image src="/copilot/reporting-diagram.png" alt="Diagrama de reportes" width={600} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </Paper>
        </Box>
      </Box>
    </Container>
  </Box>
  );
}