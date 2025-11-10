'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Avatar,
  Paper,
  Link as MuiLink,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// --- SECCIÓN 1: SOBRE NOSOTROS (TEXTO) ---
const AboutSection = () => (
  <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Columna Izquierda con el contenido (ahora más ancha) */}
        <Box sx={{ flex: 2 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 4, color: 'black' }}>
            Sobre Nosotros
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            Transforma3 es una compañía colombiana de tecnología y consultoría, especializada en la gestión circular de residuos publicitarios. Gracias a soluciones tecnológicas avanzadas, ayudamos a las empresas a convertir sus residuos en recursos y, por tanto, en ingresos, a través del primer marketplace digital de Colombia para residuos publicitarios. En el área de consultoría, nuestro equipo de expertos analiza los flujos de residuos de tu empresa para identificar potenciales de ahorro y cumplimiento normativo, impulsando la innovación y los principios de la economía circular en el mundo de la gestión de residuos.
          </Typography>
        </Box>
        {/* Columna Derecha vacía (ahora más estrecha) */}
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
      </Box>
    </Container>
  </Box>
);

// --- SECCIÓN 2: NUESTRO EQUIPO (CON BOX Y FLEXBOX) ---
const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Juan Sebastian Pedraza',
      role: 'CEO & Co-Founder',
      email: 'juan.pedraza@transforma3.co',
      avatar: '/team/juan-pedraza.jpg',
    },
    {
      name: 'Lina Estephania Diaz',
      role: 'COO & Co-Founder',
      email: 'lina.diaz@transforma3.co',
      avatar: '/team/lina-diaz.jpg',
    },
    {
      name: 'Juan David Silva Villar',
      role: 'CTO & Co-Founder',
      email: 'juan.silva@transforma3.co',
      avatar: '/team/juan-silva.jpg',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Contenedor principal de Flexbox para las dos columnas */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
        
          {/* Columna Izquierda: Perfiles del Equipo (ahora más ancha) */}
          <Box sx={{ flex: 2, width: '100%' }}>
            <Typography variant="h4" component="h2"  sx={{ fontWeight: 'bold', color: 'black' }}>
              Nuestro equipo
            </Typography>
            <Box sx={{ height: '4px', width: '35%', backgroundColor: '#4CAF50', borderRadius: '2px', mb: 5}} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {teamMembers.map((member) => (
                <Paper key={member.name} elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderRadius: '12px' }}>
                  <Avatar alt={member.name} src={member.avatar || ''} sx={{ width: 80, height: 80 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>{member.name}</Typography>
                    <Typography variant="body1" color="text.secondary">{member.role}</Typography>
                    <MuiLink href={`mailto:${member.email}`} sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', mt: 0.5, textDecoration: 'none' }}>
                      <MailOutlineIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
                      {member.email}
                    </MuiLink>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
          
          {/* Columna Derecha: Mapa (Placeholder) (ahora más estrecha) */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box sx={{
              height: { xs: 300, md: 400 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              borderRadius: '16px',
            }}>
              <Typography color="text.secondary">
                Mapa Colombia 
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function AboutUsPage() {
  return (
    <main style={{ paddingTop: '64px' }}>
      <AboutSection />
      <TeamSection />
    </main>
  );
}

