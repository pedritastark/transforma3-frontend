'use client';

import React, { useState } from 'react';
import { useMarketplace } from '../../hooks/useMarketplace';
import { useAuthStore } from '../../store/authStore';
import MarketplaceProducts from './components/MarketplaceProducts';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Chip,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Badge,
  Avatar,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  AccessTime,
  Lock,
  Star,
  Shield,
  HeadsetMic,
  Public,
  Monitor,
} from '@mui/icons-material';
import Image from 'next/image';

// --- SECCIÓN 1: HERO PROMOCIONAL ---
const MarketplaceHero = () => (
  <Box
    sx={{
      backgroundColor: '#E8F5E8',
      borderRadius: '16px',
      p: 6,
      my: 4,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
        {/* Contenido Principal */}
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#2E7D32',
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Obtén el máximo de T3 gratis
          </Typography>
          
          {/* Características */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: 48,
                height: 48,
                backgroundColor: '#2E7D32',
                borderRadius: '8px',
                color: 'white'
              }}>
                <Monitor />
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                Únete a una plataforma visionaria confiada por 20,000+ empresas
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: 48,
                height: 48,
                backgroundColor: '#2E7D32',
                borderRadius: '8px',
                color: 'white'
              }}>
                <HeadsetMic />
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                Asistencia personal altamente calificada con prevención de fraude
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: 48,
                height: 48,
                backgroundColor: '#2E7D32',
                borderRadius: '8px',
                color: 'white'
              }}>
                <Public />
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                Alcance global y selección, emparejamiento inteligente
              </Typography>
            </Box>
          </Box>
          
          {/* Botones de Acción */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                backgroundColor: '#2E7D32', 
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                '&:hover': { backgroundColor: '#1B5E20' }
              }}
            >
              REGISTRARSE GRATIS
            </Button>
            <Button 
              variant="text" 
              sx={{ 
                color: '#666',
                textDecoration: 'underline',
                textTransform: 'none'
              }}
            >
              Recordarme más tarde
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

// --- SECCIÓN 2: NAVEGACIÓN CON BADGES ---
const MarketplaceNavigation = () => (
  <Box sx={{ py: 2, borderBottom: '1px solid #e0e0e0' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" sx={{ color: '#2E7D32', fontWeight: 'bold' }}>
            OFERTAS
          </Typography>
          <Chip 
            label="413" 
            size="small" 
            sx={{ 
                      backgroundColor: '#2E7D32',
              color: 'white',
              fontWeight: 'bold'
            }} 
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" sx={{ color: '#2196F3', fontWeight: 'bold' }}>
            DEMANDAS
          </Typography>
          <Chip 
            label="32" 
            size="small" 
            sx={{ 
              backgroundColor: '#2196F3', 
              color: 'white',
              fontWeight: 'bold'
            }} 
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" sx={{ color: '#FF9800', fontWeight: 'bold' }}>
            EMPRESAS
          </Typography>
          <Chip 
            label="14,975" 
            size="small" 
            sx={{ 
              backgroundColor: '#FF9800', 
              color: 'white',
              fontWeight: 'bold'
            }} 
          />
        </Box>
      </Box>
    </Container>
  </Box>
);

// --- SECCIÓN 3: FILTROS ---
const MarketplaceFilters = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [form, setForm] = useState('');
  const [date, setDate] = useState('');
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const handleFilterClick = (filterType: string) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

  const handleOptionSelect = (filterType: string, value: string) => {
    switch (filterType) {
      case 'category':
        setCategory(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      case 'form':
        setForm(value);
        break;
      case 'date':
        setDate(value);
        break;
    }
    setOpenFilter(null);
  };

  const clearAllFilters = () => {
    setCategory('');
    setLocation('');
    setQuantity('');
    setForm('');
    setDate('');
  };

  const removeFilter = (filterType: string) => {
    switch (filterType) {
      case 'category':
        setCategory('');
        break;
      case 'location':
        setLocation('');
        break;
      case 'quantity':
        setQuantity('');
        break;
      case 'form':
        setForm('');
        break;
      case 'date':
        setDate('');
        break;
    }
  };

  const getFilterDisplayText = (filterType: string) => {
    switch (filterType) {
      case 'category':
        return category || 'Categoría';
      case 'location':
        return location || 'Ubicación';
      case 'quantity':
        return quantity || 'Cantidad';
      case 'form':
        return form || 'Forma';
      case 'date':
        return date || 'Fecha de publicación';
      default:
        return '';
    }
  };

  const getFilterOptions = (filterType: string) => {
    switch (filterType) {
      case 'category':
        return [
          { value: 'plastico', label: 'Plástico' },
          { value: 'metal', label: 'Metal' },
          { value: 'textil', label: 'Textil' },
          { value: 'papel', label: 'Papel' }
        ];
      case 'location':
        return [
          { value: 'amazonas', label: 'Amazonas' },
          { value: 'antioquia', label: 'Antioquia' },
          { value: 'arauca', label: 'Arauca' },
          { value: 'atlantico', label: 'Atlántico' },
          { value: 'bolivar', label: 'Bolívar' },
          { value: 'boyaca', label: 'Boyacá' },
          { value: 'caldas', label: 'Caldas' },
          { value: 'caqueta', label: 'Caquetá' },
          { value: 'casanare', label: 'Casanare' },
          { value: 'cauca', label: 'Cauca' },
          { value: 'cesar', label: 'Cesar' },
          { value: 'choco', label: 'Chocó' },
          { value: 'cordoba', label: 'Córdoba' },
          { value: 'cundinamarca', label: 'Cundinamarca' },
          { value: 'guainia', label: 'Guainía' },
          { value: 'guaviare', label: 'Guaviare' },
          { value: 'huila', label: 'Huila' },
          { value: 'guajira', label: 'La Guajira' },
          { value: 'magdalena', label: 'Magdalena' },
          { value: 'meta', label: 'Meta' },
          { value: 'narino', label: 'Nariño' },
          { value: 'norte-santander', label: 'Norte de Santander' },
          { value: 'putumayo', label: 'Putumayo' },
          { value: 'quindio', label: 'Quindío' },
          { value: 'risaralda', label: 'Risaralda' },
          { value: 'san-andres', label: 'San Andrés y Providencia' },
          { value: 'santander', label: 'Santander' },
          { value: 'sucre', label: 'Sucre' },
          { value: 'tolima', label: 'Tolima' },
          { value: 'valle-cauca', label: 'Valle del Cauca' },
          { value: 'vaupes', label: 'Vaupés' },
          { value: 'vichada', label: 'Vichada' }
        ];
      case 'quantity':
        return [
          { value: '1-10', label: '1-10 toneladas' },
          { value: '10-50', label: '10-50 toneladas' },
          { value: '50+', label: '50+ toneladas' }
        ];
      case 'form':
        return [
          { value: 'granulado', label: 'Granulado' },
          { value: 'polvo', label: 'Polvo' },
          { value: 'liquido', label: 'Líquido' }
        ];
      case 'date':
        return [
          { value: 'hoy', label: 'Hoy' },
          { value: 'semana', label: 'Esta semana' },
          { value: 'mes', label: 'Este mes' }
        ];
      default:
        return [];
    }
  };

  const getAppliedFilters = () => {
    const filters = [];
    if (category) filters.push({ type: 'category', label: 'CATEGORÍA', value: category });
    if (location) filters.push({ type: 'location', label: 'UBICACIÓN', value: location });
    if (quantity) filters.push({ type: 'quantity', label: 'CANTIDAD', value: quantity });
    if (form) filters.push({ type: 'form', label: 'FORMA', value: form });
    if (date) filters.push({ type: 'date', label: 'FECHA', value: date });
    return filters;
  };

  const appliedFilters = getAppliedFilters();

  return (
    <Box sx={{ 
      py: 1, 
      borderTop: '1px solid #e0e0e0',
      borderBottom: '1px solid #e0e0e0',
      position: 'relative'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Categoría */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('category')}
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                fontWeight: 'normal',
                minWidth: 120,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              {getFilterDisplayText('category')}
              <Box sx={{ ml: 1, transform: openFilter === 'category' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'category' && (
              <Paper
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  zIndex: 1000,
                  minWidth: 200,
                  maxHeight: 300,
                  overflow: 'auto',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  mt: 1
                }}
              >
                {getFilterOptions('category').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('category', option.value)}
                    sx={{
                      textAlign: 'left',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      padding: '8px 16px',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 125, 50, 0.08)'
                      }
                    }}
                  >
                    {option.label}
                  </Button>
                ))}
              </Paper>
            )}
          </Box>

          {/* Ubicación */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('location')}
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                fontWeight: 'normal',
                minWidth: 120,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              {getFilterDisplayText('location')}
              <Box sx={{ ml: 1, transform: openFilter === 'location' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'location' && (
              <Paper
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  zIndex: 1000,
                  minWidth: 250,
                  maxHeight: 300,
                  overflow: 'auto',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  mt: 1
                }}
              >
                {getFilterOptions('location').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('location', option.value)}
                    sx={{
                      textAlign: 'left',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      padding: '8px 16px',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 125, 50, 0.08)'
                      }
                    }}
                  >
                    {option.label}
                  </Button>
                ))}
              </Paper>
            )}
          </Box>

          {/* Cantidad */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('quantity')}
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                fontWeight: 'normal',
                minWidth: 120,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              {getFilterDisplayText('quantity')}
              <Box sx={{ ml: 1, transform: openFilter === 'quantity' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'quantity' && (
              <Paper
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  zIndex: 1000,
                  minWidth: 200,
                  maxHeight: 300,
                  overflow: 'auto',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  mt: 1
                }}
              >
                {getFilterOptions('quantity').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('quantity', option.value)}
                    sx={{
                      textAlign: 'left',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      padding: '8px 16px',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 125, 50, 0.08)'
                      }
                    }}
                  >
                    {option.label}
                  </Button>
                ))}
              </Paper>
            )}
          </Box>

          {/* Forma */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('form')}
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                fontWeight: 'normal',
                minWidth: 120,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              {getFilterDisplayText('form')}
              <Box sx={{ ml: 1, transform: openFilter === 'form' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'form' && (
              <Paper
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  zIndex: 1000,
                  minWidth: 200,
                  maxHeight: 300,
                  overflow: 'auto',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  mt: 1
                }}
              >
                {getFilterOptions('form').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('form', option.value)}
                    sx={{
                      textAlign: 'left',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      padding: '8px 16px',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 125, 50, 0.08)'
                      }
                    }}
                  >
                    {option.label}
                  </Button>
                ))}
              </Paper>
            )}
          </Box>

          {/* Fecha de publicación */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('date')}
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                fontWeight: 'normal',
                minWidth: 200,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              {getFilterDisplayText('date')}
              <Box sx={{ ml: 2, transform: openFilter === 'date' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'date' && (
              <Paper
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  zIndex: 1000,
                  minWidth: 200,
                  maxHeight: 300,
                  overflow: 'auto',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  mt: 1
                }}
              >
                {getFilterOptions('date').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('date', option.value)}
                    sx={{
                      textAlign: 'left',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      padding: '8px 16px',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 125, 50, 0.08)'
                      }
                    }}
                  >
                    {option.label}
                  </Button>
                ))}
              </Paper>
            )}
          </Box>
        </Box>

        {/* Registro de filtros aplicados */}
        {appliedFilters.length > 0 && (
          <Box sx={{ 
            mt: 2, 
            pt: 2, 
            borderTop: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}>
            <Button
              variant="text"
              onClick={clearAllFilters}
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                padding: '4px 8px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              🗑️ Clear all filters
            </Button>
            
            {appliedFilters.map((filter) => (
              <Chip
                key={filter.type}
                label={`${filter.label}: ${filter.value}`}
                onDelete={() => removeFilter(filter.type)}
                sx={{
                  backgroundColor: '#f5f5f5',
                  color: 'text.primary',
                  '& .MuiChip-deleteIcon': {
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.primary'
                    }
                  }
                }}
              />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

// --- SECCIÓN 4: PRODUCTOS DEL MARKETPLACE ---
const MarketplaceProducts = () => {
  const { posts, loading, error, toggleFavorite } = useMarketplace();
  const { user } = useAuthStore();

  const products = [
    {
      id: 1,
      title: "Vendiendo, Muebles",
      description: "Solo los suscriptores premium tienen acceso a esto.",
      image: "/marketplace.jpeg",
      status: "Nuevo",
      timeLeft: "9h 25m 18s",
      quantity: "4,000 piezas",
      isPremium: true,
      rating: null,
      location: null,
      price: null
    },
    {
      id: 2,
      title: "Pulpa PP de bobinas",
      description: "Solo los suscriptores premium tienen acceso a esto.",
      image: "/marketplace.jpeg",
      status: "Nuevo",
      timeLeft: "5h 20m 11s",
      quantity: "6 toneladas",
      isPremium: true,
      rating: null,
      location: null,
      price: null
    },
    {
      id: 3,
      title: "Vendiendo, oro pureza 91.67",
      description: "Solo los suscriptores premium tienen acceso a esto.",
      image: "/marketplace.jpeg",
      status: "Nuevo",
      timeLeft: "2h 37m 32s",
      quantity: "100 piezas",
      isPremium: true,
      rating: null,
      location: null,
      price: null
    },
    {
      id: 4,
      title: "Cátodos de cobre - certificado LME",
      description: "Solo los suscriptores premium tienen acceso a esto.",
      image: "/marketplace.jpeg",
      status: "Nuevo",
      timeLeft: "2h 25m 49s",
      quantity: "5,000 toneladas",
      isPremium: true,
      rating: null,
      location: null,
      price: null
    },
    {
      id: 5,
      title: "Vendiendo, textiles",
      description: "Solo los suscriptores premium tienen acceso a esto.",
      image: "/marketplace.jpeg",
      status: "Nuevo",
      timeLeft: "1h 21m 4s",
      quantity: "20 toneladas",
      isPremium: true,
      rating: null,
      location: null,
      price: null
    },
    {
      id: 6,
      title: "PP regrind + regranulate",
      description: "Material reciclable de alta calidad",
      image: "/marketplace.jpeg",
      status: "Nuevo",
      timeLeft: null,
      quantity: "100 toneladas",
      isPremium: false,
      rating: 4,
      location: "Hockenheim, Alemania",
      price: "precio por acuerdo"
    },
    {
      id: 7,
      title: "Vendiendo, plásticos",
      description: "Material plástico de alta calidad",
      image: "/marketplace.jpeg",
      status: "Nuevo",
      timeLeft: null,
      quantity: "16 toneladas",
      isPremium: false,
      rating: 5,
      location: "Gorzów Wielkopolski, Polonia",
      price: "300.00 EUR / t"
    },
    {
      id: 8,
      title: "Vendiendo, textiles",
      description: "Solo los suscriptores premium tienen acceso a esto.",
      image: "/marketplace.jpeg",
      status: "Nuevo",
      timeLeft: "0h 41m 7s",
      quantity: "20 toneladas",
      isPremium: true,
      rating: null,
      location: null,
      price: null
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 3,
          justifyContent: { xs: 'center', sm: 'flex-start' }
        }}>
          {products.map((product) => (
            <Box 
              key={product.id}
              sx={{ 
                width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)', lg: 'calc(25% - 18px)' },
                maxWidth: '300px'
              }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  '&:hover': {
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  
                  {/* Badge de Estado */}
                  <Chip
                    label={product.status}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      backgroundColor: '#2E7D32',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  />
                  
                  {/* Botón de Favorito */}
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      '&:hover': { backgroundColor: 'white' }
                    }}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    {favorites.has(product.id) ? 
                      <Favorite sx={{ color: '#f44336' }} /> : 
                      <FavoriteBorder />
                    }
                  </IconButton>
                  
                  {/* Rating Stars */}
                  {product.rating && (
                    <Box sx={{ position: 'absolute', bottom: 8, left: 8 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          sx={{ 
                            color: i < product.rating! ? '#FFD700' : '#e0e0e0',
                            fontSize: '1rem'
                          }} 
                        />
                      ))}
                    </Box>
                  )}
                </Box>
                
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: 2, 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {product.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  
                  {/* Contenido que se expande para empujar el precio/cantidad hacia abajo */}
                  <Box sx={{ flexGrow: 1 }} />
                  
                  {/* Sección inferior fija */}
                  <Box sx={{ mt: 'auto' }}>
                    {product.isPremium ? (
                      /* Productos Premium */
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Lock sx={{ color: '#2E7D32', fontSize: '1rem' }} />
                          <Typography variant="body2" sx={{ color: '#2E7D32', fontWeight: 'bold' }}>
                            {product.timeLeft}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                          {product.quantity}
                        </Typography>
                      </Box>
                    ) : (
                      /* Productos Regulares */
                      <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          📍 {product.location}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            {product.price}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product.quantity}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
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
