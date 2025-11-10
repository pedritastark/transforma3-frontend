'use client';
import React from 'react';
import { Box, Typography, Container, ListItem, ListItemIcon, List } from '@mui/material';

export default function SolutionSection() {
  return (
    <Box sx={{ py: 8 }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
        Soluciones Transparentes, Eficientes y de Impacto <span style={{ color: '#4CAF50' }}>.</span>
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Hemos apoyado a más de 20 compañías, incluyendo nombres reconocidos, a liberar todo el potencial de sus residuos materiales mientras reducimos su huella ambiental. Nuestros servicios prácticos les ayudaron a:
      </Typography>
      <List sx={{ display: 'inline-block', textAlign: 'left', my: 2 }}>
        <ListItem>• Ahorrar costos al <strong>convertir residuos en recursos</strong>.</ListItem>
        <ListItem>• Asegurar la transparencia con <strong>reportes detallados y seguimiento de cumplimiento</strong>.</ListItem>
        <ListItem>• Alcanzar metas de sostenibilidad (ESG) con <strong>estrategias de economía circular a medida</strong>.</ListItem>
      </List>
      <Typography variant="body1" color="text.secondary">
        Con acceso a una red de +500 recicladores y experiencia líder en la industria, proveemos las herramientas para crear resultados medibles.
      </Typography>
    </Container>
  </Box>
  );
}