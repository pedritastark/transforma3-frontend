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
import { ArrowDropDown, ArrowDropUp, Favorite, Lock, Star, Verified, HeadsetMic, Public } from '@mui/icons-material';
import Image from 'next/image';
import { useMarketplace } from '../../hooks/useMarketplace';
import { useAuthStore } from '../../store/authStore';
import MarketplaceProducts from './components/MarketplaceProducts';

// --- SECCIÓN 1: HERO DEL MARKETPLACE ---
const MarketplaceHero = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  if (isLoggedIn) {
    return (
      <Box
        sx={{
          backgroundColor: 'rgb(203, 247, 221)',
          py: 4,
          borderRadius: 3,
          mx: 2,
          my: 4,
        }}
      >
        <Container maxWidth="lg" sx={{ px: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
              Marketplace Transforma3
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', mt: 2 }}>
              Explora ofertas y demandas de economía circular
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
  <Box
    sx={{
      backgroundColor: 'rgb(203, 247, 221)',
      pt: 3,
      pb: 2,
      borderRadius: 3,
      mx: 0,
      my: 4,
      px: 0,
    }}
  >
    <Container maxWidth="lg" sx={{ px: 4 }}>
      <Box sx={{ textAlign: 'left', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#000000', mb: 3, fontSize: '1.5rem' }}>
          Obtén el máximo de Transforma3 gratis
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap', mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: '1 1 300px' }}>
            <Verified sx={{ 
              fontSize: 60, 
              color: '#1B5E20',
              flexShrink: 0
            }} />
            <Typography variant="body1" sx={{ color: '#333', fontWeight: 500 }}>
              Únete a una plataforma visionaria confiada por 20,000+ empresas
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: '1 1 300px' }}>
            <HeadsetMic sx={{ 
              fontSize: 60, 
              color: '#666',
              flexShrink: 0
            }} />
            <Typography variant="body1" sx={{ color: '#333', fontWeight: 500 }}>
              Asistencia personal altamente calificada con prevención de fraude
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: '1 1 300px' }}>
            <Public sx={{ 
              fontSize: 60, 
              color: '#666',
              flexShrink: 0
            }} />
            <Typography variant="body1" sx={{ color: '#333', fontWeight: 500 }}>
              Alcance global y selección, emparejamiento inteligente
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography 
            component="a"
            href="/register"
            sx={{ 
              color: '#1B5E20',
              fontSize: '1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            REGISTRARSE GRATIS
          </Typography>
          <Typography 
            sx={{ 
              color: '#333',
              fontSize: '1rem',
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': { color: '#000' }
            }}
          >
            Recordarme más tarde
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
  );
};

// --- SECCIÓN 2: NAVEGACIÓN CON BADGES ---
const MarketplaceNavigation = () => {
  const router = useRouter();

  const handleDemandasClick = () => {
    router.push('/demandas');
  };

  const handleEmpresasClick = () => {
    router.push('/empresas');
  };

  return (
    <Box sx={{ py: 3, backgroundColor: '#f7f7f7', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
          {/* Página actual - OFERTAS (más grande) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5" sx={{ color: '#2E7D32', fontWeight: 'bold', fontSize: '1.3rem' }}>
              OFERTAS
            </Typography>
            <Chip label="427" size="small" sx={{ backgroundColor: '#2E7D32', color: 'white', fontWeight: 'bold' }} />
          </Box>
          
          {/* DEMANDAS */}
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
            onClick={handleDemandasClick}
          >
            <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize: '1.1rem' }}>
              DEMANDAS
            </Typography>
            <Chip label="28" size="small" sx={{ backgroundColor: '#1976d2', color: 'white', fontWeight: 'bold' }} />
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
            onClick={handleEmpresasClick}
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

// --- SECCIÓN 3: FILTROS ---
const MarketplaceFilters = () => {
  const { categories, fetchPosts } = useMarketplace();
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>({});

  const handleFilterClick = (filterType: string) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

  const handleOptionSelect = (filterType: string, value: any) => {
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
      case 'quantity':
        return [
          { id: '1-10', name: '1-10 unidades' },
          { id: '11-50', name: '11-50 unidades' },
          { id: '51-100', name: '51-100 unidades' },
          { id: '100+', name: 'Más de 100 unidades' }
        ];
      case 'form':
        return [
          { id: 'solido', name: 'Sólido' },
          { id: 'liquido', name: 'Líquido' },
          { id: 'gas', name: 'Gas' },
          { id: 'polvo', name: 'Polvo' }
        ];
      case 'date':
        return [
          { id: 'today', name: 'Hoy' },
          { id: 'week', name: 'Esta semana' },
          { id: 'month', name: 'Este mes' },
          { id: 'all', name: 'Todos' }
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
    <Box sx={{ mx: 2 }}>
      <Box sx={{ 
        borderTop: '1px solid #616161', 
        borderBottom: '1px solid #616161', 
        py: 1.5,
        px: 4,
        backgroundColor: '#f5f5f5',
        borderRadius: 1
      }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Box sx={{ position: 'relative' }}>
            <Button
              onClick={() => handleFilterClick('category')}
              sx={{ 
                color: 'black', 
                textTransform: 'none',
                minWidth: 'auto',
                px: 2,
                py: 0.5,
                justifyContent: 'space-between',
                fontSize: '0.95rem',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Categoría
              <ArrowDropDown 
                sx={{ 
                  ml: 0.5,
                  fontSize: '1.2rem',
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
              onClick={() => handleFilterClick('region')}
              sx={{ 
                color: 'black', 
                textTransform: 'none',
                minWidth: 'auto',
                px: 2,
                py: 0.5,
                justifyContent: 'space-between',
                fontSize: '0.95rem',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Ubicación
              <ArrowDropDown 
                sx={{ 
                  ml: 0.5,
                  fontSize: '1.2rem',
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
                    onClick={() => handleOptionSelect('region', option)}
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
              onClick={() => handleFilterClick('quantity')}
              sx={{ 
                color: 'black', 
                textTransform: 'none',
                minWidth: 'auto',
                px: 2,
                py: 0.5,
                justifyContent: 'space-between',
                fontSize: '0.95rem',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Cantidad
              <ArrowDropDown 
                sx={{ 
                  ml: 0.5,
                  fontSize: '1.2rem',
                  transform: openFilter === 'quantity' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </Button>
            {openFilter === 'quantity' && (
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
                {getFilterOptions('quantity').map((option) => (
                  <Button
                    key={typeof option === 'string' ? option : option.id}
                    onClick={() => handleOptionSelect('quantity', typeof option === 'string' ? option : option.id)}
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
              onClick={() => handleFilterClick('form')}
              sx={{ 
                color: 'black', 
                textTransform: 'none',
                minWidth: 'auto',
                px: 2,
                py: 0.5,
                justifyContent: 'space-between',
                fontSize: '0.95rem',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Forma
              <ArrowDropDown 
                sx={{ 
                  ml: 0.5,
                  fontSize: '1.2rem',
                  transform: openFilter === 'form' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </Button>
            {openFilter === 'form' && (
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
                {getFilterOptions('form').map((option) => (
                  <Button
                    key={typeof option === 'string' ? option : option.id}
                    onClick={() => handleOptionSelect('form', typeof option === 'string' ? option : option.id)}
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
              onClick={() => handleFilterClick('date')}
              sx={{ 
                color: 'black', 
                textTransform: 'none',
                minWidth: 'auto',
                px: 2,
                py: 0.5,
                justifyContent: 'space-between',
                fontSize: '0.95rem',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Fecha de publicación
              <ArrowDropDown 
                sx={{ 
                  ml: 0.5,
                  fontSize: '1.2rem',
                  transform: openFilter === 'date' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </Button>
            {openFilter === 'date' && (
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
                {getFilterOptions('date').map((option) => (
                  <Button
                    key={typeof option === 'string' ? option : option.id}
                    onClick={() => handleOptionSelect('date', typeof option === 'string' ? option : option.id)}
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
    </Box>
  );
};

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function MarketplacePage() {
  const { user } = useAuthStore();
  
  return (
    <main style={{ paddingTop: '64px', backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <MarketplaceHero isLoggedIn={!!user} />
      </Container>
      
      <MarketplaceNavigation />
      <MarketplaceFilters />
      <MarketplaceProducts />
    </main>
  );
}
