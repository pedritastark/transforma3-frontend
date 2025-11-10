'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Chip,
} from '@mui/material';
import { Favorite, Lock } from '@mui/icons-material';
import { useMarketplace } from '../../../hooks/useMarketplace';
import { useAuthStore } from '../../../store/authStore';

const MarketplaceProducts = () => {
  const { posts, loading, error, toggleFavorite } = useMarketplace();
  const { user } = useAuthStore();

  if (loading) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography>Cargando publicaciones...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4, mx: 2 }}>
      <Container maxWidth="lg" sx={{ px: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
          {posts.map((product) => (
            <Card key={product.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.images?.[0] || "/marketplace.jpeg"}
                alt={product.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Chip
                    label="Nuevo"
                    size="small"
                    sx={{ backgroundColor: '#2E7D32', color: 'white', fontSize: '0.75rem' }}
                  />
                  {user && (
                    <IconButton
                      onClick={() => toggleFavorite(product.id, product.is_favorited)}
                      sx={{ color: product.is_favorited ? '#f44336' : '#2E7D32' }}
                    >
                      <Favorite />
                    </IconButton>
                  )}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {product.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                  {product.description}
                </Typography>

                {product.is_premium ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Lock sx={{ color: '#2E7D32', fontSize: '1rem' }} />
                    <Typography variant="body2" sx={{ color: '#2E7D32', fontWeight: 'bold' }}>
                      Solo suscriptores premium
                    </Typography>
                  </Box>
                ) : (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                    {product.location && (
                      <Typography variant="body2" color="text.secondary">
                        📍 {product.location}
                      </Typography>
                    )}
                    {product.price && (
                      <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
                        💰 ${product.price.toLocaleString()} COP{product.unit ? ` / ${product.unit}` : ''}
                      </Typography>
                    )}
                  </Box>
                )}

                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  📦 {product.quantity} {product.unit || 'unidades'}
                </Typography>

                {product.category_name && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Categoría: {product.category_name}
                  </Typography>
                )}

                {product.company_name && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Empresa: {product.company_name}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>

        {posts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No hay publicaciones disponibles
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Intenta ajustar los filtros o vuelve más tarde
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default MarketplaceProducts;
