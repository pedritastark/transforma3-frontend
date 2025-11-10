'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/authStore';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  Paper,
  Checkbox,
  MenuItem,
} from '@mui/material';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Link from 'next/link';


// Listas para los campos de selección
const cities = ['Bogotá D.C.', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Otra'];
const sectors = ['Construcción', 'Logística', 'Retail', 'Eventos', 'Manufactura', 'Otro'];

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading, error, clearError } = useAuthStore();
  const [userType, setUserType] = useState('company');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    company_name: '',
    full_name: '',
    city: '',
    sector: '',
    phone: '',
  });
  const [success, setSuccess] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    setFormData({
      ...formData,
      [event.target.name!]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearError();
    setSuccess('');

    if (formData.password !== formData.repeatPassword) {
      return;
    }

    try {
      const { repeatPassword, ...payload } = formData;
      const finalPayload = {
        ...payload,
        user_type: userType,
        company_name: userType === 'company' ? formData.company_name : formData.full_name,
      };

      await register(finalPayload);
      setSuccess('Usuario registrado con éxito. Serás redirigido al inicio.');
      
      setTimeout(() => {
        router.push('/'); 
      }, 2000);

    } catch (err: any) {
      // Error is handled by the store
    }
  };

  return (
    <main>
      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 5 }}>
        <Container maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, mt: 4 }}>
        Regístrate gratis en la plataforma T3
      </Typography>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
        ¡Conecta con la economía circular!
      </Typography>

      {/* Componente de características */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
          {/* Característica 1 */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: 2, borderRadius: '8px', backgroundColor: 'rgba(76, 175, 80, 0.05)' }}>
            <MarkunreadMailboxOutlinedIcon sx={{ color: '#4caf50', fontSize: '28px', mt: 0.5 }} />
            <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.4 }}>
              Desbloquea la mensajería directa y responde a{' '}
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                320 ofertas
              </Box>
              .
            </Typography>
          </Box>

          {/* Característica 2 */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: 2, borderRadius: '8px', backgroundColor: 'rgba(76, 175, 80, 0.05)' }}>
            <GroupOutlinedIcon sx={{ color: '#4caf50', fontSize: '28px', mt: 0.5 }} />
            <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.4 }}>
              Alcanza a más de{' '}
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                20,000
              </Box>{' '}
              compradores potenciales.
            </Typography>
          </Box>

          {/* Característica 3 */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: 2, borderRadius: '8px', backgroundColor: 'rgba(76, 175, 80, 0.05)' }}>
            <MarkEmailReadOutlinedIcon sx={{ color: '#4caf50', fontSize: '28px', mt: 0.5 }} />
            <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.4 }}>
              Recibe nuestras populares{' '}
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                alertas diarias
              </Box>{' '}
              por email.
            </Typography>
          </Box>

          {/* Característica 4 */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: 2, borderRadius: '8px', backgroundColor: 'rgba(76, 175, 80, 0.05)' }}>
            <LanguageOutlinedIcon sx={{ color: '#4caf50', fontSize: '28px', mt: 0.5 }} />
            <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.4 }}>
              Aparece en la{' '}
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Base de Datos de la Industria
              </Box>{' '}
              para aumentar tus oportunidades.
            </Typography>
          </Box>
        </Box>
      </Box>

        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' } }}>
          Detalles de Contacto
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
                ¿Qué tipo de usuario eres?
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box 
                  sx={{ 
                    flex: '1 1 280px',
                    minWidth: '280px',
                    p: 3,
                    border: userType === 'company' ? '3px solid #4caf50' : '2px solid #e0e0e0',
                    borderRadius: '16px',
                    backgroundColor: userType === 'company' ? 'rgba(76, 175, 80, 0.05)' : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#4caf50',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }
                  }}
                  onClick={() => setUserType('company')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Radio 
                      checked={userType === 'company'} 
                      sx={{ 
                        color: '#4caf50',
                        '&.Mui-checked': { color: '#4caf50' }
                      }} 
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                      Empresa
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Ofrezco material y quiero conectarme con proveedores. Puedo crear campañas de material y gestionar inventario.
                  </Typography>
                </Box>

                <Box 
                  sx={{ 
                    flex: '1 1 280px',
                    minWidth: '280px',
                    p: 3,
                    border: userType === 'provider' ? '3px solid #4caf50' : '2px solid #e0e0e0',
                    borderRadius: '16px',
                    backgroundColor: userType === 'provider' ? 'rgba(76, 175, 80, 0.05)' : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#4caf50',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }
                  }}
                  onClick={() => setUserType('provider')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Radio 
                      checked={userType === 'provider'} 
                      sx={{ 
                        color: '#4caf50',
                        '&.Mui-checked': { color: '#4caf50' }
                      }} 
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                      Proveedor
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Busco material y quiero conectarme con empresas. Puedo encontrar ofertas de material y recibir notificaciones.
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            {userType === 'company' && (
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                                  <Box>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 'bold', color: '#666' }}>
                    Nombre de la empresa *
                  </Typography>
                  <TextField 
                    name="company_name" 
                    value={formData.company_name} 
                    onChange={handleChange} 
                    fullWidth 
                    required 
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderWidth: '2px',
                        borderRadius: '12px',
                        height: '40px',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#4caf50',
                        borderWidth: '2px',
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Box>
                </Box>
                <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                                  <Box>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 'bold', color: '#666' }}>
                    Sector *
                  </Typography>
                  <TextField 
                    name="sector" 
                    value={formData.sector} 
                    onChange={handleChange} 
                    fullWidth 
                    required 
                    select
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderWidth: '2px',
                        borderRadius: '12px',
                        height: '40px',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#4caf50',
                        borderWidth: '2px',
                        borderRadius: '12px',
                      },
                    }}
                  >
                    {sectors.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                  ))}
                  </TextField>
                </Box>
                </Box>
              </Box>
            )}

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                <Box>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 'bold', color: '#666' }}>
                    Nombre completo *
                  </Typography>
                  <TextField 
                    name="full_name" 
                    value={formData.full_name} 
                    onChange={handleChange} 
                    fullWidth 
                    required 
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderWidth: '2px',
                        borderRadius: '12px',
                        height: '40px',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#4caf50',
                        borderWidth: '2px',
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                <Box>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 'bold', color: '#666' }}>
                    Ciudad *
                  </Typography>
                  <TextField 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    fullWidth 
                    required 
                    select
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderWidth: '2px',
                        borderRadius: '12px',
                        height: '40px',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#4caf50',
                        borderWidth: '2px',
                        borderRadius: '12px',
                      },
                    }}
                  >
                    {cities.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                  ))}
                  </TextField>
                </Box>
              </Box>
            </Box>
            
            {userType === 'provider' && (
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                                  <Box>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 'bold', color: '#666' }}>
                    Teléfono *
                  </Typography>
                  <TextField 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    fullWidth 
                    required 
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderWidth: '2px',
                        borderRadius: '12px',
                        height: '40px',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#4caf50',
                        borderWidth: '2px',
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Box>
                </Box>
              </Box>
            )}
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                <Box>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 'bold', color: '#666' }}>
                    Email *
                  </Typography>
                  <TextField 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    fullWidth 
                    required 
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderWidth: '2px',
                        borderRadius: '12px',
                        height: '40px',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#4caf50',
                        borderWidth: '2px',
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                <Box>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 'bold', color: '#666' }}>
                    Contraseña *
                  </Typography>
                  <TextField 
                    name="password" 
                    type="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    fullWidth 
                    required 
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderWidth: '2px',
                        borderRadius: '12px',
                        height: '40px',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#4caf50',
                        borderWidth: '2px',
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                <Box>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 'bold', color: '#666' }}>
                    Repetir contraseña *
                  </Typography>
                  <TextField 
                    name="repeatPassword" 
                    type="password" 
                    value={formData.repeatPassword} 
                    onChange={handleChange} 
                    fullWidth 
                    required 
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderWidth: '2px',
                        borderRadius: '12px',
                        height: '40px',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#4caf50',
                        borderWidth: '2px',
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box>
              <FormControlLabel
                control={
                  <Checkbox 
                    name="terms" 
                    required 
                    sx={{
                      color: '#4caf50',
                      '&.Mui-checked': {
                        color: '#4caf50',
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ display: 'inline', lineHeight: 1.4 }}>
                    Estoy de acuerdo con los <Link href="/terms" style={{ marginLeft: '4px', marginRight: '4px' }}>términos y condiciones</Link> y la <Link href="/privacy" style={{ marginLeft: '4px', marginRight: '4px' }}>política de privacidad</Link>.
                  </Typography>
                }
              />
            </Box>
            
            <Box>
              <FormControlLabel
                control={
                  <Checkbox 
                    name="newsletter" 
                    sx={{
                      color: '#4caf50',
                      '&.Mui-checked': {
                        color: '#4caf50',
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="body2">
                    Acepto suscribirme a boletines informativos ocasionales.
                  </Typography>
                }
              />
            </Box>

            <Box>
              {error && <Alert severity="error" sx={{ width: '100%' }}>{error}</Alert>}
              {success && <Alert severity="success" sx={{ width: '100%' }}>{success}</Alert>}
            </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  disabled={isLoading}
                  sx={{ mt: 2, py: 1.5, px: 4, fontSize: '1rem', backgroundColor: '#388e3c', color: 'white', '&:hover': { backgroundColor: '#2e7d32' } }}
                >
                  {isLoading ? 'Registrando...' : 'Registrarse'}
                </Button>
              </Box>
                    </Box>
        </Box>
        </Container>
      </Box>
    </main>
  );
}

