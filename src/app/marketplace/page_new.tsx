'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Badge,
  Avatar,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { ArrowDropDown, ArrowDropUp, Favorite, Lock, Star } from '@mui/icons-material';
import Image from 'next/image';
import { useMarketplace } from '../../hooks/useMarketplace';
import { useAuthStore } from '../../store/authStore';
import MarketplaceProducts from './components/MarketplaceProducts';

// --- SECCIÓN 1: HERO DEL MARKETPLACE ---
const MarketplaceHero = () => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      py: 8,
      minHeight: '60vh',
      color: 'white',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url(/../hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.4)',
        zIndex: -1,
      },
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
        <Box sx={{ flex: { md: 7 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
            Marketplace T3
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
            Conecta con la economía circular. Encuentra materiales, vende residuos y construye un futuro sostenible.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#2E7D32',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { backgroundColor: '#1B5E20' }
              }}
            >
              REGISTRARSE GRATIS
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Ver Ofertas
            </Button>
          </Box>
        </Box>
        <Box sx={{ flex: { md: 5 }, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ backgroundColor: '#2E7D32', p: 2, borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>320</Typography>
                <Typography variant="body2">Ofertas Activas</Typography>
              </Box>
              <Box sx={{ backgroundColor: '#2E7D32', p: 2, borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>1,200</Typography>
                <Typography variant="body2">Empresas</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <Box sx={{ backgroundColor: '#2E7D32', p: 2, borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>50+</Typography>
                <Typography variant="body2">Categorías</Typography>
              </Box>
              <Box sx={{ backgroundColor: '#2E7D32', p: 2, borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>24/7</Typography>
                <Typography variant="body2">Disponible</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

// --- SECCIÓN 2: NAVEGACIÓN CON BADGES ---
const MarketplaceNavigation = () => (
  <Box sx={{ py: 2 }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" sx={{ color: '#ff6f00', fontWeight: 'bold' }}>
            MARKETPLACE
          </Typography>
          <Chip label="320" size="small" sx={{ backgroundColor: '#ff6f00', color: 'white' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" sx={{ color: '#2E7D32', fontWeight: 'bold' }}>
            OFERTAS
          </Typography>
          <Chip label="426" size="small" sx={{ backgroundColor: '#2E7D32', color: 'white' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" sx={{ color: '#ff6f00', fontWeight: 'bold' }}>
            DEMANDAS
          </Typography>
          <Chip label="28" size="small" sx={{ backgroundColor: '#ff6f00', color: 'white' }} />
        </Box>
      </Box>
    </Container>
  </Box>
);

// --- SECCIÓN 3: FILTROS ---
const MarketplaceFilters = () => {
  const { categories, fetchPosts } = useMarketplace();
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string | number>>({});

  const handleFilterClick = (filterType: string) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

  const handleOptionSelect = (filterType: string, value: string | number) => {
    setSelectedFilters(prev => ({ ...prev, [filterType]: value }));
    setOpenFilter(null);
    
    // Fetch posts with new filters
    fetchPosts({ [filterType]: value });
  };

  const getFilterDisplayText = (filterType: string) => {
    const value = selectedFilters[filterType];
    if (!value) return filterType;
    
    switch (filterType) {
      case 'category':
        return categories.find(c => c.id === value)?.name || filterType;
      case 'post_type':
        return value === 'oferta' ? 'Ofertas' : 'Demandas';
      case 'region':
        return value;
      default:
        return value;
    }
  };

  const getFilterOptions = (filterType: string) => {
    switch (filterType) {
      case 'category':
        return categories;
      case 'post_type':
        return [
          { id: 'oferta', name: 'Ofertas' },
          { id: 'demanda', name: 'Demandas' }
        ];
      case 'region':
        return [
          'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá',
          'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó',
          'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila',
          'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander',
          'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia',
          'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'
        ];
      default:
        return [];
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    fetchPosts();
  };

  const removeFilter = (filterType: string) => {
    const newFilters = { ...selectedFilters };
    delete newFilters[filterType];
    setSelectedFilters(newFilters);
    fetchPosts(newFilters);
  };

  const getAppliedFilters = () => {
    return Object.entries(selectedFilters).filter(([_, value]) => value !== null && value !== undefined);
  };

  return (
    <Box sx={{ borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0', py: 1 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', position: 'relative' }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <Box sx={{ position: 'relative' }}>
              <Button
                onClick={() => handleFilterClick('category')}
                sx={{ 
                  color: 'black', 
                  textTransform: 'none',
                  minWidth: '120px',
                  justifyContent: 'space-between'
                }}
              >
                {getFilterDisplayText('category')}
                <ArrowDropDown 
                  sx={{ 
                    ml: 1,
                    transform: openFilter === 'category' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </Button>
              {openFilter === 'category' && (
                <Paper
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: 1000,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    maxHeight: '200px',
                    overflow: 'auto',
                    minWidth: '200px'
                  }}
                >
                  {getFilterOptions('category').map((option) => (
                    <Button
                      key={typeof option === 'string' ? option : option.id}
                      onClick={() => handleOptionSelect('category', typeof option === 'string' ? option : option.id)}
                      sx={{ 
                        display: 'block', 
                        width: '100%', 
                        textAlign: 'left', 
                        color: '#000',
                        textTransform: 'none'
                      }}
                    >
                      {typeof option === 'string' ? option : option.name}
                    </Button>
                  ))}
                </Paper>
              )}
            </Box>

            <Box sx={{ position: 'relative' }}>
              <Button
                onClick={() => handleFilterClick('post_type')}
                sx={{ 
                  color: 'black', 
                  textTransform: 'none',
                  minWidth: '100px',
                  justifyContent: 'space-between'
                }}
              >
                {getFilterDisplayText('post_type')}
                <ArrowDropDown 
                  sx={{ 
                    ml: 1,
                    transform: openFilter === 'post_type' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </Button>
              {openFilter === 'post_type' && (
                <Paper
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: 1000,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    maxHeight: '200px',
                    overflow: 'auto',
                    minWidth: '150px'
                  }}
                >
                  {getFilterOptions('post_type').map((option) => (
                    <Button
                      key={typeof option === 'string' ? option : option.id}
                      onClick={() => handleOptionSelect('post_type', typeof option === 'string' ? option : option.id)}
                      sx={{ 
                        display: 'block', 
                        width: '100%', 
                        textAlign: 'left', 
                        color: '#000',
                        textTransform: 'none'
                      }}
                    >
                      {typeof option === 'string' ? option : option.name}
                    </Button>
                  ))}
                </Paper>
              )}
            </Box>

            <Box sx={{ position: 'relative' }}>
              <Button
                onClick={() => handleFilterClick('region')}
                sx={{ 
                  color: 'black', 
                  textTransform: 'none',
                  minWidth: '180px',
                  justifyContent: 'space-between'
                }}
              >
                {getFilterDisplayText('region')}
                <ArrowDropDown 
                  sx={{ 
                    ml: 2,
                    transform: openFilter === 'region' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </Button>
              {openFilter === 'region' && (
                <Paper
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: 1000,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    maxHeight: '200px',
                    overflow: 'auto',
                    minWidth: '200px'
                  }}
                >
                  {getFilterOptions('region').map((option) => (
                    <Button
                      key={typeof option === 'string' ? option : option.id}
                      onClick={() => handleOptionSelect('region', typeof option === 'string' ? option : option.id)}
                      sx={{ 
                        display: 'block', 
                        width: '100%', 
                        textAlign: 'left', 
                        color: '#000',
                        textTransform: 'none'
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </Paper>
              )}
            </Box>
          </Box>
        </Box>

        {/* Applied Filters */}
        {getAppliedFilters().length > 0 && (
          <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Filtros aplicados:
            </Typography>
            {getAppliedFilters().map(([filterType, value]) => (
              <Chip
                key={filterType}
                label={`${filterType}: ${getFilterDisplayText(filterType)}`}
                onDelete={() => removeFilter(filterType)}
                size="small"
                sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }}
              />
            ))}
            <Button
              onClick={clearAllFilters}
              size="small"
              sx={{ color: '#d32f2f', textTransform: 'none' }}
            >
              Limpiar todos
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function MarketplacePage() {
  return (
    <main style={{ paddingTop: '64px', backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <MarketplaceHero />
      </Container>
      
      <MarketplaceNavigation />
      <MarketplaceFilters />
      <MarketplaceProducts />
    </main>
  );
}
