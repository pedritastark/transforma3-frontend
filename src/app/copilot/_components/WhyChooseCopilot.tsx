'use client';
import React from 'react';
import { Box, Typography, Container, ListItemText, ListItem, ListItemIcon,  List } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function WhyChooseCopilot() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
        <Box sx={{ flex: { md: 7 } }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            ¿Por qué elegir el Copiloto T3?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            El Copiloto T3 va más allá de la gestión de residuos tradicional: es una alianza estratégica diseñada para las necesidades de tu negocio. Nuestro servicio probado ofrece:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }} primary="Ahorros significativos de costos del 10-30%" secondary="A través de estrategias optimizadas de reciclaje y disposición." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }} primary="Un enfoque justo y transparente" secondary="Garantizando confianza y claridad en cada proceso." />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }} primary="Mejoras continuas" secondary="Que potencian la eficiencia y abren nuevas oportunidades para la circularidad." />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ flex: { md: 5 }, textAlign: 'center', width: '100%' }}>
          <Typography variant="h6">Efecto Potencial:</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ff6f00' }}>10-30%</Typography>
          <Typography variant="body1" color="text.secondary">de ahorro en costos</Typography>
        </Box>
      </Box>
    </Container>
  </Box>
  );
}