'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/authStore';
import {
  Box,
  Typography,
  Button,
  Container,
  Chip,
  Card,
  CardContent,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Paper,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Lock,
  Star,
  LocationOn,
  CalendarToday,
  Scale,
  ShoppingCart,
  ExpandMore,
  Person,
  CheckCircle,
  Visibility,
  Phone,
  Email,
} from '@mui/icons-material';

// --- SECCIÓN 1: NAVEGACIÓN CON BADGES ---
const CompaniesNavigation = () => {
  const router = useRouter();

  const handleOffersClick = () => {
    router.push('/marketplace');
  };

  const handleDemandsClick = () => {
    router.push('/demandas');
  };

  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {/* Página actual - EMPRESAS (más grande) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5" sx={{ color: '#ff6f00', fontWeight: 'bold', fontSize: '1.3rem' }}>
              EMPRESAS
            </Typography>
            <Chip 
              label="14,975" 
              size="small" 
              sx={{ 
                backgroundColor: '#ff6f00',
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
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
            <Chip 
              label="427" 
              size="small" 
              sx={{ 
                backgroundColor: '#2E7D32',
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
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
            onClick={handleDemandsClick}
          >
            <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize: '1.1rem' }}>
              DEMANDAS
            </Typography>
            <Chip 
              label="28" 
              size="small" 
              sx={{ 
                backgroundColor: '#1976d2', 
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- SECCIÓN 2: FILTROS ---
const CompaniesFilters = () => {
  const [buyersSellers, setBuyersSellers] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [industry, setIndustry] = useState('');
  const [type, setType] = useState('');
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const handleFilterClick = (filterType: string) => {
    setOpenFilter(openFilter === filterType ? null : filterType);
  };

  const handleOptionSelect = (filterType: string, value: string) => {
    switch (filterType) {
      case 'buyersSellers':
        setBuyersSellers(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'subcategory':
        setSubcategory(value);
        break;
      case 'industry':
        setIndustry(value);
        break;
      case 'type':
        setType(value);
        break;
    }
    setOpenFilter(null);
  };

  const getFilterDisplayText = (filterType: string) => {
    switch (filterType) {
      case 'buyersSellers':
        return buyersSellers || 'COMPRADORES/VENDEDORES';
      case 'country':
        return country || 'DEPARTAMENTO';
      case 'category':
        return category || 'CATEGORÍA';
      case 'subcategory':
        return subcategory || 'SUBCATEGORÍA';
      case 'industry':
        return industry || 'INDUSTRIA';
      case 'type':
        return type || 'TIPO';
      default:
        return '';
    }
  };

  const getFilterOptions = (filterType: string) => {
    switch (filterType) {
      case 'buyersSellers':
        return [
          { value: 'buyers', label: 'Compradores' },
          { value: 'sellers', label: 'Vendedores' },
          { value: 'both', label: 'Ambos' }
        ];
      case 'country':
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
      case 'category':
        return [
          { value: 'plastics', label: 'Plásticos' },
          { value: 'metals', label: 'Metales' },
          { value: 'textiles', label: 'Textiles' },
          { value: 'paper', label: 'Papel' },
          { value: 'electronics', label: 'Electrónicos' }
        ];
      case 'subcategory':
        return [
          { value: 'regranulate', label: 'Regranulado' },
          { value: 'recycled', label: 'Reciclado' },
          { value: 'virgin', label: 'Virgen' }
        ];
      case 'industry':
        return [
          { value: 'manufacturing', label: 'Manufactura' },
          { value: 'recycling', label: 'Reciclaje' },
          { value: 'processing', label: 'Procesamiento' }
        ];
      case 'type':
        return [
          { value: 'verified', label: 'Verificado' },
          { value: 'premium', label: 'Premium' },
          { value: 'standard', label: 'Estándar' }
        ];
      default:
        return [];
    }
  };

  return (
    <Box sx={{ 
      py: 3,
      position: 'relative'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          backgroundColor: '#4d2a00',
          borderRadius: '20px',
          px: 3,
          py: 2,
          mx: 2
        }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* COMPRADORES/VENDEDORES */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('buyersSellers')}
              sx={{
                textTransform: 'none',
                color: 'white',
                fontWeight: 'bold',
                minWidth: 180,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {getFilterDisplayText('buyersSellers')}
              <Box sx={{ ml: 1, transform: openFilter === 'buyersSellers' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'buyersSellers' && (
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
                {getFilterOptions('buyersSellers').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('buyersSellers', option.value)}
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

          {/* REGIÓN */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('country')}
              sx={{
                textTransform: 'none',
                color: 'white',
                fontWeight: 'bold',
                minWidth: 100,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {getFilterDisplayText('country')}
              <Box sx={{ ml: 1, transform: openFilter === 'country' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'country' && (
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
                {getFilterOptions('country').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('country', option.value)}
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

          {/* CATEGORÍA */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('category')}
              sx={{
                textTransform: 'none',
                color: 'white',
                fontWeight: 'bold',
                minWidth: 120,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
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

          {/* SUBCATEGORÍA */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('subcategory')}
              sx={{
                textTransform: 'none',
                color: 'white',
                fontWeight: 'bold',
                minWidth: 140,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {getFilterDisplayText('subcategory')}
              <Box sx={{ ml: 1, transform: openFilter === 'subcategory' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'subcategory' && (
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
                {getFilterOptions('subcategory').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('subcategory', option.value)}
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

          {/* INDUSTRIA */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('industry')}
              sx={{
                textTransform: 'none',
                color: 'white',
                fontWeight: 'bold',
                minWidth: 100,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {getFilterDisplayText('industry')}
              <Box sx={{ ml: 1, transform: openFilter === 'industry' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'industry' && (
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
                {getFilterOptions('industry').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('industry', option.value)}
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

          {/* TIPO */}
          <Box sx={{ position: 'relative' }}>
            <Button
              variant="text"
              onClick={() => handleFilterClick('type')}
              sx={{
                textTransform: 'none',
                color: 'white',
                fontWeight: 'bold',
                minWidth: 80,
                justifyContent: 'space-between',
                padding: '8px 14px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {getFilterDisplayText('type')}
              <Box sx={{ ml: 1, transform: openFilter === 'type' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                ▼
              </Box>
            </Button>
            {openFilter === 'type' && (
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
                {getFilterOptions('type').map((option) => (
                  <Button
                    key={option.value}
                    fullWidth
                    onClick={() => handleOptionSelect('type', option.value)}
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

          {/* Resultados y filtros populares */}
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.9rem' }}>
              Empresas encontradas: 14,176
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <FormControlLabel
                control={<Checkbox sx={{ color: 'white', '&.Mui-checked': { color: '#ff6f00' } }} />}
                label={<Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem' }}>COMPRADORES DE PLÁSTICO REGRANULADO</Typography>}
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: 'white', '&.Mui-checked': { color: '#ff6f00' } }} />}
                label={<Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem' }}>FABRICANTES DE PLÁSTICO</Typography>}
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: 'white', '&.Mui-checked': { color: '#ff6f00' } }} />}
                label={<Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem' }}>RECICLADORES CERTIFICADOS</Typography>}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};


// --- SECCIÓN 4: LISTADO DE EMPRESAS ---
const CompaniesList = () => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const { user } = useAuthStore();

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const isLoggedIn = !!user;

  const companies = [
    {
      id: 1,
      name: 'RECICLAJE COLOMBIA S.A.S',
      isVerified: true,
      tags: ['FABRICANTE DE PLÁSTICO', 'RECICLAJE', 'BIZMACHINE...'],
      rating: 5,
      role: 'Fabricante, Procesador / Reciclador',
      deals: { active: 23, total: 47, memberSince: '07/2020' },
      contact: {
        phone: '+57 1 234 5678',
        email: 'contacto@reciclajecolombia.com',
        website: 'www.reciclajecolombia.com',
        address: 'Calle 100 #15-20, Bogotá D.C.'
      },
      listings: [
        {
          material: 'PVC regranulado AA',
          date: '07/2024',
          location: 'Bogotá, Colombia',
          status: 'Vendiendo Mensualmente',
          quantity: '148 t',
          icon: <Scale />
        },
        {
          material: 'Material PVC Reciclado',
          date: '06/2024',
          location: 'Bogotá, Colombia',
          status: 'Comprando',
          quantity: '15 t',
          icon: <ShoppingCart />
        }
      ],
      moreCount: 15
    },
    {
      id: 2,
      name: 'PLÁSTICOS DEL CARIBE LTDA',
      isVerified: true,
      tags: ['PROCESADOR DE PLÁSTICO', 'VERIFICADO', 'PREMIUM'],
      rating: 4,
      role: 'Procesador / Reciclador',
      deals: { active: 15, total: 32, memberSince: '03/2021' },
      contact: {
        phone: '+57 5 678 9012',
        email: 'ventas@plasticoscaribe.com',
        website: 'www.plasticoscaribe.com',
        address: 'Zona Franca, Barranquilla'
      },
      listings: [
        {
          material: 'PP Regranulado (Material Reciclado)',
          date: '08/2024',
          location: 'Barranquilla, Colombia',
          status: 'Vendiendo',
          quantity: '88 t',
          icon: <Scale />
        },
        {
          material: 'Material HDPE Reciclado',
          date: '07/2024',
          location: 'Barranquilla, Colombia',
          status: 'Comprando',
          quantity: '25 t',
          icon: <ShoppingCart />
        }
      ],
      moreCount: 8
    },
    {
      id: 3,
      name: 'ECOPLAST MEDELLÍN',
      isVerified: true,
      tags: ['RECICLADOR', 'PLÁSTICOS', 'ECOLÓGICO'],
      rating: 4,
      role: 'Reciclador / Procesador',
      deals: { active: 12, total: 28, memberSince: '01/2022' },
      contact: {
        phone: '+57 4 567 8901',
        email: 'info@ecoplastmedellin.com',
        website: 'www.ecoplastmedellin.com',
        address: 'Carrera 50 #25-30, Medellín'
      },
      listings: [
        {
          material: 'PET Reciclado Granulado',
          date: '09/2024',
          location: 'Medellín, Colombia',
          status: 'Vendiendo Semanalmente',
          quantity: '45 t',
          icon: <Scale />
        },
        {
          material: 'Residuos Plásticos Mixtos',
          date: '08/2024',
          location: 'Medellín, Colombia',
          status: 'Comprando',
          quantity: '120 t',
          icon: <ShoppingCart />
        }
      ],
      moreCount: 5
    },
    {
      id: 4,
      name: 'INDUSTRIAS DEL VALLE S.A.',
      isVerified: false,
      tags: ['FABRICANTE', 'PLÁSTICOS', 'EMPAQUES'],
      rating: 3,
      role: 'Fabricante / Comprador',
      deals: { active: 8, total: 18, memberSince: '05/2023' },
      contact: {
        phone: '+57 2 345 6789',
        email: 'ventas@industriasdelvalle.com',
        website: 'www.industriasdelvalle.com',
        address: 'Zona Industrial, Cali'
      },
      listings: [
        {
          material: 'Polietileno de Alta Densidad',
          date: '09/2024',
          location: 'Cali, Colombia',
          status: 'Comprando Mensualmente',
          quantity: '200 t',
          icon: <ShoppingCart />
        },
        {
          material: 'Residuos de Empaques',
          date: '08/2024',
          location: 'Cali, Colombia',
          status: 'Vendiendo',
          quantity: '35 t',
          icon: <Scale />
        }
      ],
      moreCount: 3
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {companies.map((company) => (
            <Card 
              key={company.id}
              sx={{ 
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  {/* Información de la empresa */}
                  <Box sx={{ flex: 1 }}>
                    {/* Tags */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      {company.isVerified && (
                      <Chip 
                        icon={<CheckCircle />}
                        label="VERIFICADO" 
                        size="small" 
                        sx={{ 
                          backgroundColor: '#2E7D32',
                          color: 'white',
                          fontWeight: 'bold'
                        }} 
                      />
                      )}
                      {company.tags.map((tag, index) => (
                        <Chip 
                          key={index}
                          label={tag} 
                          size="small" 
                          variant="outlined"
                          sx={{ 
                            borderColor: '#e0e0e0',
                            color: 'text.secondary'
                          }} 
                        />
                      ))}
                    </Box>

                    {/* Nombre de la empresa */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, letterSpacing: '0.1em', fontSize: '1.1rem' }}>
                      {isLoggedIn ? company.name : company.name.split('').map(() => '•').join('')}
                    </Typography>

                    {/* Rating */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          sx={{ 
                            color: i < company.rating ? '#ff6f00' : '#e0e0e0',
                            fontSize: '1.1rem'
                          }} 
                        />
                      ))}
                    </Box>

                    {/* Rol */}
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.9rem' }}>
                      {company.role}
                    </Typography>

                    {/* Acciones */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      {isLoggedIn ? (
                        <>
                          <Button
                            variant="contained"
                            startIcon={<Phone />}
                            sx={{ 
                              backgroundColor: '#2E7D32',
                              color: 'white',
                              textTransform: 'none',
                              fontWeight: 'bold',
                              '&:hover': { backgroundColor: '#1B5E20' }
                            }}
                          >
                            CONTACTAR
                          </Button>
                          <Button
                            variant="outlined"
                            startIcon={<Email />}
                            sx={{ 
                              color: '#1976d2', 
                              borderColor: '#1976d2',
                              textTransform: 'none',
                              fontWeight: 'bold',
                              '&:hover': { 
                                borderColor: '#1565c0',
                                backgroundColor: 'rgba(25, 118, 210, 0.04)'
                              }
                            }}
                          >
                            EMAIL
                          </Button>
                          <IconButton
                            onClick={() => toggleFavorite(company.id)}
                            sx={{ color: favorites.has(company.id) ? '#f44336' : 'text.secondary' }}
                          >
                            {favorites.has(company.id) ? <Favorite /> : <FavoriteBorder />}
                          </IconButton>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="text"
                            startIcon={<Lock />}
                            sx={{ 
                              color: '#ff6f00', 
                              textTransform: 'none',
                              fontWeight: 'bold'
                            }}
                          >
                            DESBLOQUEAR
                          </Button>
                          <IconButton
                            onClick={() => toggleFavorite(company.id)}
                            sx={{ color: favorites.has(company.id) ? '#f44336' : 'text.secondary' }}
                          >
                            {favorites.has(company.id) ? <Favorite /> : <FavoriteBorder />}
                          </IconButton>
                          <Button
                            variant="text"
                            sx={{ 
                              color: 'text.secondary', 
                              textTransform: 'none',
                              fontWeight: 'bold'
                            }}
                          >
                            NOTA
                          </Button>
                        </>
                      )}
                    </Box>
                  </Box>

                  {/* Estadísticas de la plataforma */}
                  <Box sx={{ textAlign: 'right', minWidth: 200 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                      Negocios en la plataforma T3: activos <strong>{company.deals.active}</strong>, total <strong>{company.deals.total}</strong>, miembro desde <strong>{company.deals.memberSince}</strong>
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Información de contacto (solo para usuarios registrados) */}
                {isLoggedIn && (
                  <>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2' }}>
                        Información de Contacto
                      </Typography>
                      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Phone sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                            <Typography variant="body2">
                              <strong>Teléfono:</strong> {company.contact.phone}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Email sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                            <Typography variant="body2">
                              <strong>Email:</strong> {company.contact.email}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Visibility sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                            <Typography variant="body2">
                              <strong>Sitio Web:</strong> {company.contact.website}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                            <Typography variant="body2">
                              <strong>Dirección:</strong> {company.contact.address}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                  </>
                )}

                {/* Listados de materiales */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {company.listings.map((listing, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: 200, fontSize: '0.9rem' }}>
                        {listing.material}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CalendarToday sx={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                          {listing.date}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                          {listing.location}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        {listing.icon}
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                          {listing.status}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>
                        {listing.quantity}
                      </Typography>
                    </Box>
                  ))}
                  
                  {/* Botón para mostrar más */}
                  <Button
                    variant="text"
                    endIcon={<ExpandMore />}
                    sx={{ 
                      color: '#ff6f00', 
                      textTransform: 'none',
                      fontWeight: 'bold',
                      alignSelf: 'flex-start',
                      mt: 1
                    }}
                  >
                    MOSTRAR {company.moreCount} MÁS
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// --- SECCIÓN 5: CALL TO ACTION FINAL ---
const FinalCTA = () => {
  const { user } = useAuthStore();
  const isLoggedIn = !!user;

  if (isLoggedIn) {
    return null; // No mostrar CTA para usuarios registrados
  }

  return (
    <Box sx={{ py: 8, backgroundColor: '#f7f7f7' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#4d2a00', fontSize: '2.2rem' }}>
            Desbloquea todo.
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}>
            Tengamos 15 minutos de café en línea y te mostraremos lo que T3 Connect puede hacer por ti.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<Person />}
            sx={{
              backgroundColor: '#2E7D32',
              color: 'white',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              '&:hover': { backgroundColor: '#1B5E20' }
            }}
          >
            RESERVAR DEMO
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function CompaniesPage() {
  return (
    <main style={{ paddingTop: '64px', backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <CompaniesNavigation />
      <CompaniesFilters />
      <CompaniesList />
      <FinalCTA />
    </main>
  );
}
