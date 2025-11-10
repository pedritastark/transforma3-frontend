'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  IconButton,
  Chip,
} from '@mui/material';
import { Add, Edit, Delete, Visibility } from '@mui/icons-material';
import { useAuthStore } from '../../store/authStore';
import { useRouter } from 'next/navigation';

export default function PublicacionesPage() {
  const { user } = useAuthStore();
  const router = useRouter();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    post_type: 'oferta',
    price: '',
    quantity: '',
    unit: '',
    location: '',
    region: '',
  });

  // Datos de ejemplo para las publicaciones
  const [publicaciones] = useState([
    {
      id: 1,
      title: 'Plástico PET reciclado',
      description: 'Plástico PET limpio y clasificado, ideal para reciclaje',
      category: 'Plásticos',
      post_type: 'oferta',
      price: 2500,
      quantity: 1000,
      unit: 'kg',
      location: 'Bogotá',
      region: 'Cundinamarca',
      status: 'activa',
      views: 45,
      created_at: '2024-01-15'
    },
    {
      id: 2,
      title: 'Cartón corrugado',
      description: 'Cartón corrugado en buen estado, sin humedad',
      category: 'Papel y Cartón',
      post_type: 'oferta',
      price: 1800,
      quantity: 500,
      unit: 'kg',
      location: 'Medellín',
      region: 'Antioquia',
      status: 'activa',
      views: 32,
      created_at: '2024-01-14'
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para crear la publicación
    console.log('Crear publicación:', formData);
    setShowCreateForm(false);
    setFormData({
      title: '',
      description: '',
      category: '',
      post_type: 'oferta',
      price: '',
      quantity: '',
      unit: '',
      location: '',
      region: '',
    });
  };

  if (!user) {
    return (
      <main style={{ paddingTop: '64px' }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', color: '#d32f2f' }}>
            Acceso Denegado
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
            Debes iniciar sesión para acceder a esta página.
          </Typography>
        </Container>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: '64px', backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
              Mis Publicaciones
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
              Gestiona tus ofertas y demandas en el marketplace
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setShowCreateForm(true)}
            sx={{
              backgroundColor: '#2E7D32',
              '&:hover': { backgroundColor: '#1B5E20' }
            }}
          >
            Nueva Publicación
          </Button>
        </Box>

        {/* Formulario de creación */}
        {showCreateForm && (
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Crear Nueva Publicación
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Título"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Tipo</InputLabel>
                    <Select
                      name="post_type"
                      value={formData.post_type}
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="oferta">Oferta</MenuItem>
                      <MenuItem value="demanda">Demanda</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Descripción"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    multiline
                    rows={3}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth required>
                    <InputLabel>Categoría</InputLabel>
                    <Select
                      name="category"
                      value={formData.category}
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="plasticos">Plásticos</MenuItem>
                      <MenuItem value="papel">Papel y Cartón</MenuItem>
                      <MenuItem value="metal">Metales</MenuItem>
                      <MenuItem value="vidrio">Vidrio</MenuItem>
                      <MenuItem value="organico">Orgánico</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Precio (COP)"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Cantidad"
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Unidad"
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    placeholder="kg, toneladas, unidades..."
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Región</InputLabel>
                    <Select
                      name="region"
                      value={formData.region}
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="Cundinamarca">Cundinamarca</MenuItem>
                      <MenuItem value="Antioquia">Antioquia</MenuItem>
                      <MenuItem value="Valle del Cauca">Valle del Cauca</MenuItem>
                      <MenuItem value="Atlántico">Atlántico</MenuItem>
                      <MenuItem value="Santander">Santander</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Ubicación específica"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    <Button
                      variant="outlined"
                      onClick={() => setShowCreateForm(false)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: '#2E7D32',
                        '&:hover': { backgroundColor: '#1B5E20' }
                      }}
                    >
                      Crear Publicación
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        )}

        {/* Lista de publicaciones */}
        <Grid container spacing={3}>
          {publicaciones.map((publicacion) => (
            <Grid item xs={12} md={6} key={publicacion.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                      {publicacion.title}
                    </Typography>
                    <Chip
                      label={publicacion.status}
                      color={publicacion.status === 'activa' ? 'success' : 'default'}
                      size="small"
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {publicacion.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    <Chip label={publicacion.category} size="small" variant="outlined" />
                    <Chip label={publicacion.post_type} size="small" variant="outlined" />
                    <Chip label={publicacion.region} size="small" variant="outlined" />
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        ${publicacion.price?.toLocaleString()} COP
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {publicacion.quantity} {publicacion.unit}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Visibility sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {publicacion.views}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                
                <Box sx={{ p: 2, pt: 0, display: 'flex', gap: 1 }}>
                  <IconButton size="small" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <Delete />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {publicaciones.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              No tienes publicaciones aún
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crea tu primera publicación para comenzar a conectar con la economía circular
            </Typography>
          </Box>
        )}
      </Container>
    </main>
  );
}
