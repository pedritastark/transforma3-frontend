'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/authStore';
import {
  Box,
  Typography,
  Container,
  Paper,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Business as BusinessIcon,
  Add as AddIcon,
  ShoppingCart as ShoppingCartIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  MonetizationOn as MonetizationOnIcon,
  Inventory as InventoryIcon,
  People as PeopleIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AttachMoney as AttachMoneyIcon,
  LocalOffer as LocalOfferIcon,
  Analytics as AnalyticsIcon,
  AutoAwesome as AutoAwesomeIcon,
} from '@mui/icons-material';

// Componente para KPIs de empresas
const CompanyKPIs = () => (
  <Box>
    <Box>
      <Card sx={{ 
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '24px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          background: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }
      }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box sx={{ 
              width: 56, 
              height: 56, 
              borderRadius: '50%', 
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 3,
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <AttachMoneyIcon sx={{ fontSize: 28, color: 'white' }} />
            </Box>
            <Typography variant="body2" sx={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontWeight: 600, 
              textTransform: 'uppercase', 
              fontSize: '0.8rem',
              letterSpacing: '0.1em'
            }}>
              Total Ventas
            </Typography>
          </Box>
          
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            color: 'white', 
            mb: 2,
            letterSpacing: '-0.02em'
          }}>
            $2.5M
          </Typography>
          
          <Typography variant="body1" sx={{ 
            color: 'rgba(255,255,255,0.8)', 
            mb: 3, 
            fontSize: '1rem',
            fontWeight: 400
          }}>
            de $5.0M objetivo
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            p: 1.5,
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <TrendingUpIcon sx={{ fontSize: 18, color: 'white', mr: 1 }} />
            <Typography variant="body2" sx={{ 
              color: 'white', 
              fontSize: '0.8rem', 
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              +12% VS MES ANTERIOR
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
    
    <Box>
      <Card sx={{ 
        backgroundColor: 'white', 
        borderRadius: '16px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}>
              <LocalOfferIcon sx={{ fontSize: 24, color: '#1976d2' }} />
            </Box>
            <Typography variant="body2" sx={{ color: '#666', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.75rem' }}>
              Total Productos
        </Typography>
          </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
            24 Items
        </Typography>
          
          <Typography variant="body2" sx={{ color: '#666', mb: 2, fontSize: '0.875rem' }}>
          Publicaciones activas
        </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingUpIcon sx={{ fontSize: 16, color: '#2E7D32', mr: 0.5 }} />
            <Typography variant="body2" sx={{ color: '#2E7D32', fontSize: '0.75rem', fontWeight: 500 }}>
              +3 NUEVAS ESTE MES
        </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
    
    <Box>
      <Card sx={{ 
        backgroundColor: 'white', 
        borderRadius: '16px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}>
              <PeopleIcon sx={{ fontSize: 24, color: '#1976d2' }} />
            </Box>
            <Typography variant="body2" sx={{ color: '#666', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.75rem' }}>
              % Retención
        </Typography>
          </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
            89%
        </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Chip 
              label="Alto" 
              size="small" 
              sx={{ 
                backgroundColor: '#2E7D32',
                color: 'white',
                fontSize: '0.7rem',
                height: 20,
                mr: 1
              }} 
            />
            <Box sx={{ 
              display: 'flex', 
              gap: 0.5,
              '& .segment': {
                width: 8,
                height: 4,
                borderRadius: 2,
                backgroundColor: '#2E7D32'
              },
              '& .segment:last-child': {
                backgroundColor: '#e0e0e0'
              }
            }}>
              <Box className="segment" />
              <Box className="segment" />
              <Box className="segment" />
              <Box className="segment" />
    </Box>
  </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingUpIcon sx={{ fontSize: 16, color: '#2E7D32', mr: 0.5 }} />
            <Typography variant="body2" sx={{ color: '#2E7D32', fontSize: '0.75rem', fontWeight: 500 }}>
              +5% VS MES ANTERIOR
    </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
    
    <Box>
      <Card sx={{ 
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        borderRadius: '16px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              backgroundColor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}>
              <AutoAwesomeIcon sx={{ fontSize: 24, color: 'white' }} />
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.75rem' }}>
              Acciones IA
        </Typography>
          </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
            8 Acciones
        </Typography>
          
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2, fontSize: '0.875rem' }}>
            Recomendadas con IA
        </Typography>
      
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', mb: 2 }}>
            Actualización en tiempo real
        </Typography>
          
          <Button
            variant="contained"
            size="small"
            endIcon={<AutoAwesomeIcon />}
            sx={{
              backgroundColor: 'white',
              color: '#1976d2',
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 'bold',
              px: 2,
              py: 0.5,
              fontSize: '0.75rem',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)'
              }
            }}
          >
            Ver Acciones IA
          </Button>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

// Componente para KPIs de proveedores
const ProviderKPIs = () => (
  <Box>
    <Box>
      <Card sx={{ 
        backgroundColor: 'white', 
        borderRadius: '16px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}>
              <InventoryIcon sx={{ fontSize: 24, color: '#1976d2' }} />
            </Box>
            <Typography variant="body2" sx={{ color: '#666', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.75rem' }}>
              Total Productos
            </Typography>
          </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
            8 Items
    </Typography>
          
          <Typography variant="body2" sx={{ color: '#666', mb: 2, fontSize: '0.875rem' }}>
            Publicaciones activas
    </Typography>
    
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingUpIcon sx={{ fontSize: 16, color: '#2E7D32', mr: 0.5 }} />
            <Typography variant="body2" sx={{ color: '#2E7D32', fontSize: '0.75rem', fontWeight: 500 }}>
              +2 NUEVAS ESTE MES
      </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
    
    <Box>
      <Card sx={{ 
        backgroundColor: 'white', 
        borderRadius: '16px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}>
              <VisibilityIcon sx={{ fontSize: 24, color: '#1976d2' }} />
            </Box>
            <Typography variant="body2" sx={{ color: '#666', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.75rem' }}>
              Visualizaciones
        </Typography>
          </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
            1,234
        </Typography>
          
          <Typography variant="body2" sx={{ color: '#666', mb: 2, fontSize: '0.875rem' }}>
            Este mes
        </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingUpIcon sx={{ fontSize: 16, color: '#2E7D32', mr: 0.5 }} />
            <Typography variant="body2" sx={{ color: '#2E7D32', fontSize: '0.75rem', fontWeight: 500 }}>
              +15% VS MES ANTERIOR
        </Typography>
      </Box>
        </CardContent>
      </Card>
    </Box>
    
    <Box>
      <Card sx={{ 
        backgroundColor: 'white', 
        borderRadius: '16px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}>
              <PeopleIcon sx={{ fontSize: 24, color: '#1976d2' }} />
            </Box>
            <Typography variant="body2" sx={{ color: '#666', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.75rem' }}>
              Contactos
            </Typography>
  </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
            23
    </Typography>
    
          <Typography variant="body2" sx={{ color: '#666', mb: 2, fontSize: '0.875rem' }}>
            Contactos recibidos
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingUpIcon sx={{ fontSize: 16, color: '#2E7D32', mr: 0.5 }} />
            <Typography variant="body2" sx={{ color: '#2E7D32', fontSize: '0.75rem', fontWeight: 500 }}>
              +5 NUEVOS ESTE MES
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
    
    <Box>
      <Card sx={{ 
        background: 'linear-gradient(135deg, #ff6f00 0%, #ffb74d 100%)',
        borderRadius: '16px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              backgroundColor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}>
              <AnalyticsIcon sx={{ fontSize: 24, color: 'white' }} />
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.75rem' }}>
              Tasa Respuesta
            </Typography>
          </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
            78%
          </Typography>
        
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2, fontSize: '0.875rem' }}>
            Respuesta a consultas
          </Typography>
          
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', mb: 2 }}>
            Tiempo promedio: 2h
          </Typography>
          
          <Button
            variant="contained"
            size="small"
            endIcon={<AnalyticsIcon />}
            sx={{
              backgroundColor: 'white',
              color: '#ff6f00',
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 'bold',
              px: 2,
              py: 0.5,
              fontSize: '0.75rem',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)'
              }
            }}
          >
            Ver Métricas
          </Button>
        </CardContent>
      </Card>
    </Box>
  </Box>
);


// Componente para acciones rápidas
const QuickActions = ({ userType }: { userType: string }) => (
  <Box sx={{ mb: 4 }}>
    <Box>
      <Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          fullWidth
          sx={{ 
            py: 2,
            backgroundColor: '#ff6f00',
            color: 'white',
            '&:hover': {
              backgroundColor: '#e65100'
            }
          }}
        >
          Crear Oferta
        </Button>
      </Box>
      
      {userType === 'company' && (
        <Box>
          <Button
            variant="outlined"
            startIcon={<ShoppingCartIcon />}
            fullWidth
            sx={{ py: 2 }}
          >
      Crear Demanda
          </Button>
        </Box>
      )}
      
      <Box>
        <Button
          variant="outlined"
          startIcon={<AssessmentIcon />}
          fullWidth
          sx={{ py: 2 }}
        >
          Ver Publicaciones
        </Button>
      </Box>
    </Box>
  </Box>
);

// Modal para editar información de empresa
const EditCompanyModal = ({ open, onClose, user }: { open: boolean, onClose: () => void, user: { companyName?: string; fullName?: string; email?: string; phone?: string; website?: string; address?: string } | null }) => {
  const [formData, setFormData] = useState({
    companyName: user?.companyName || '',
    fullName: user?.fullName || '',
    city: 'Bogotá D.C.',
    sector: 'Construcción',
    phone: '+57 300 123 4567',
  });

  const handleSave = () => {
    // Aquí se implementaría la lógica para guardar los cambios
    console.log('Guardando cambios:', formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Editar Información de la Empresa</DialogTitle>
      <DialogContent>
        <Box>
          <Box>
            <TextField
              fullWidth
              label="Nombre de la Empresa"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </Box>
          
          <Box>
            <TextField
              fullWidth
              label="Nombre del Contacto"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </Box>
          
          <Box>
            <FormControl fullWidth>
              <InputLabel>Ciudad</InputLabel>
              <Select
                value={formData.city}
                label="Ciudad"
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              >
                <MenuItem value="Bogotá D.C.">Bogotá D.C.</MenuItem>
                <MenuItem value="Medellín">Medellín</MenuItem>
                <MenuItem value="Cali">Cali</MenuItem>
                <MenuItem value="Barranquilla">Barranquilla</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box>
            <FormControl fullWidth>
              <InputLabel>Sector</InputLabel>
              <Select
                value={formData.sector}
                label="Sector"
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
              >
                <MenuItem value="Construcción">Construcción</MenuItem>
                <MenuItem value="Manufactura">Manufactura</MenuItem>
                <MenuItem value="Logística">Logística</MenuItem>
                <MenuItem value="Tecnología">Tecnología</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
          <Box>
            <TextField
              fullWidth
              label="Teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave} variant="contained">Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleLogout = () => {
      logout();
      router.push('/');
  };

  if (!user) {
    router.push('/');
    return null;
  }

  const isCompany = user.userType === 'company';

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #ff6f00 0%, #ff8f00 50%, #ffb74d 100%)',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elementos decorativos de fondo */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header minimalista */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 6,
          pt: 4
        }}>
          <Box>
            <Typography variant="h3" sx={{ 
              color: 'white', 
              fontWeight: 300,
              mb: 1,
              letterSpacing: '-0.02em'
            }}>
              {user.fullName || user.email}
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.9rem'
            }}>
              {isCompany ? 'Panel Empresarial' : 'Panel de Proveedor'}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => setEditModalOpen(true)}
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.5)',
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }
              }}
            >
              Editar Perfil
            </Button>
            <Button
              variant="outlined"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.5)',
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }
              }}
            >
              Salir
            </Button>
          </Box>
        </Box>

        {/* KPIs con diseño glassmorphism */}
        {isCompany ? <CompanyKPIs /> : <ProviderKPIs />}

        {/* Acciones rápidas con diseño mejorado */}
        <QuickActions userType={user.userType} />

        {/* Modal de edición */}
        <EditCompanyModal 
          open={editModalOpen} 
          onClose={() => setEditModalOpen(false)} 
          user={user}
        />
      </Container>
    </Box>
  );
}