'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Chip,
  IconButton,
  Avatar,
} from '@mui/material';
import {
  Add as AddIcon,
  AccessTime as AccessTimeIcon,
  LocationOn as LocationOnIcon,
  Star as StarIcon,
} from '@mui/icons-material';

// --- SECCIÓN 1: NAVEGACIÓN CON BADGES ---
const DemandsNavigation = () => {
  const router = useRouter();

  const handleOffersClick = () => {
    router.push('/marketplace');
  };

  const handleCompaniesClick = () => {
    router.push('/empresas');
  };

  return (
    <Box sx={{ py: 3, backgroundColor: '#f7f7f7', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
          {/* Página actual - DEMANDAS (más grande) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize: '1.3rem' }}>
              DEMANDAS
            </Typography>
            <Chip label="28" size="small" sx={{ backgroundColor: '#1976d2', color: 'white', fontWeight: 'bold' }} />
          </Box>
          
          {/* OFERTAS */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8
              }
            }}
            onClick={handleOffersClick}
          >
            <Typography variant="h6" sx={{ color: '#2E7D32', fontWeight: 'bold', fontSize: '1.1rem' }}>
              OFERTAS
            </Typography>
            <Chip label="427" size="small" sx={{ backgroundColor: '#2E7D32', color: 'white', fontWeight: 'bold' }} />
          </Box>
          
          {/* EMPRESAS */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8
              }
            }}
            onClick={handleCompaniesClick}
          >
            <Typography variant="h6" sx={{ color: '#ff6f00', fontWeight: 'bold', fontSize: '1.1rem' }}>
              EMPRESAS
            </Typography>
            <Chip label="14,975" size="small" sx={{ backgroundColor: '#ff6f00', color: 'white', fontWeight: 'bold' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- SECCIÓN 2: BARRA DE ACCIONES Y FILTROS ---
const DemandsActionBar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  const handleCreateNew = () => {
    // Aquí se puede implementar la funcionalidad para crear nueva demanda
    console.log('Crear nueva demanda');
  };

  return (
    <Box sx={{ py: 2, backgroundColor: '#f7f7f7', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <Typography
            onClick={handleCreateNew}
            sx={{
              color: '#1976d2',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            + CREAR NUEVO
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="text"
              onClick={() => setOpenCategory(!openCategory)}
              sx={{
                color: 'black',
                textTransform: 'none',
                fontWeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 0
              }}
            >
              Categoría
              <Box sx={{ transform: openCategory ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                ▼
              </Box>
            </Button>

            <Button
              variant="text"
              onClick={() => setOpenLocation(!openLocation)}
              sx={{
                color: 'black',
                textTransform: 'none',
                fontWeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 0
              }}
            >
              Ubicación
              <Box sx={{ transform: openLocation ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                ▼
              </Box>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- SECCIÓN 3: LISTA DE DEMANDAS ---
const DemandsList = () => {
  const demands = [
    {
      id: 1,
      title: "Comprando, plásticos, EPS, Poliestireno",
      frequency: "Mensual",
      location: "Bogotá, Colombia",
      price: "Precio por acuerdo",
      quantity: "123,456",
      unit: "toneladas",
      isNew: true,
      isPremium: true
    },
    {
      id: 2,
      title: "Comprando, plásticos, EPS",
      frequency: "Semanal",
      location: "Medellín, Colombia",
      price: "Precio por acuerdo",
      quantity: "123,456",
      unit: "toneladas",
      isNew: false,
      isPremium: true
    },
    {
      id: 3,
      title: "Comprando, plásticos LLDPE Regrind/ LLDPE Regrind",
      frequency: "Mensual",
      location: "Cali, Colombia",
      price: "Precio por acuerdo",
      quantity: "24,000",
      unit: "toneladas",
      isNew: true,
      isPremium: false
    },
    {
      id: 4,
      title: "Busco residuos de PVC duro blanco/regrind",
      frequency: "Mensual",
      location: "Barranquilla, Colombia",
      price: "Precio por acuerdo",
      quantity: "20",
      unit: "toneladas",
      isNew: true,
      isPremium: false
    },
    {
      id: 5,
      title: "Comprando, plásticos",
      frequency: "Demanda única",
      location: "Cartagena, Colombia",
      price: "Precio por acuerdo",
      quantity: "10",
      unit: "toneladas",
      isNew: false,
      isPremium: false
    },
    {
      id: 6,
      title: "Comprando productos EPP (principalmente guantes de nitrilo)",
      frequency: "Trimestral",
      location: "Bucaramanga, Colombia",
      price: "Precio por acuerdo",
      quantity: "30",
      unit: "toneladas",
      isNew: false,
      isPremium: false
    }
  ];

  return (
    <Box sx={{ py: 2, backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {demands.map((demand) => (
            <Paper
              key={demand.id}
              sx={{
                p: 2,
                backgroundColor: 'rgb(247, 253, 255)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                minHeight: '80px',
                '&:hover': {
                  backgroundColor: 'rgb(235, 245, 250)',
                  transition: 'background-color 0.2s'
                }
              }}
            >
              {/* Información de la demanda */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1976d2',
                    mb: 1,
                    fontSize: '1.1rem'
                  }}
                >
                  {demand.title}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTimeIcon sx={{ fontSize: '1rem', color: '#666' }} />
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {demand.frequency}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOnIcon sx={{ fontSize: '1rem', color: '#666' }} />
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {demand.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Badges e iconos */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {demand.isNew && (
                  <Chip
                    label="NEW"
                    size="small"
                    sx={{
                      backgroundColor: '#1976d2',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '0.75rem'
                    }}
                  />
                )}
                
                {demand.isPremium && (
                  <StarIcon sx={{ color: '#ff6f00', fontSize: '1.2rem' }} />
                )}
              </Box>

              {/* Precio y cantidad */}
              <Box sx={{ textAlign: 'right', minWidth: '200px' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1976d2',
                    fontWeight: 'bold',
                    mb: 1
                  }}
                >
                  Precio: <span style={{ fontWeight: 'normal' }}>{demand.price}</span>
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1976d2',
                    fontWeight: 'bold'
                  }}
                >
                  Toneladas: <span style={{ fontWeight: 'normal' }}>{demand.quantity}</span>
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function DemandsPage() {
  return (
    <main style={{ paddingTop: '64px', backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <DemandsNavigation />
      <DemandsActionBar />
      <DemandsList />
    </main>
  );
}
