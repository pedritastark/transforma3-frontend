'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Chip,
  Paper,
  Link as MuiLink,
} from '@mui/material';
import Image from 'next/image';

// Datos de las noticias encontradas
const newsArticles = [
  {
    title: 'Colombia lanza el Programa Basura Cero para transformar la gestión de residuos',
    summary: 'El gobierno colombiano ha presentado una nueva hoja de ruta nacional con el objetivo de reducir la generación de basura, fortalecer el rol de los recicladores de oficio y promover la economía circular en todo el país.',
    source: 'Ministerio de Ambiente',
    date: 'Junio 20, 2025',
    url: 'https://www.minambiente.gov.co/colombia-lanza-el-programa-basura-cero-para-transformar-la-gestion-de-residuos/',
    tags: ['Legislación', 'Colombia', 'Sostenibilidad'],
    image: '/basura-cero.jpg',
  },
  {
    title: 'El World Circular Economy Forum se celebra por primera vez en América Latina',
    summary: 'La edición 2025 del foro más importante sobre economía circular a nivel mundial reunirá a líderes de gobiernos, empresas y sociedad civil para debatir cómo rediseñar nuestros sistemas económicos y productivos.',
    source: 'Mundo EXPO PACK',
    date: 'Abril 29, 2025',
    url: 'https://www.mundoexpopack.com/empaque-sostenible/article/22939813/world-circular-economy-forum-se-celebra-por-primera-vez-en-amrica-latina',
    tags: ['Eventos', 'LATAM', 'Sostenibilidad'],
    image: '/news-wcef.png',
  },
  {
    title: 'CDMX implementará nueva modalidad de recolección de basura por días diferenciados',
    summary: 'Como parte de su estrategia "Ciudad Circular: Basura Cero", la Ciudad de México busca mejorar el manejo y aprovechamiento de los residuos desde el origen, garantizando que se mantengan separados desde el domicilio hasta su destino final.',
    source: 'Infobae',
    date: 'Agosto 28, 2025',
    url: 'https://www.infobae.com/mexico/2025/08/28/habra-nueva-modalidad-de-recoleccion-de-basura-en-cdmx-de-que-se-trata/',
    tags: ['Proyectos', 'México', 'Sostenibilidad'],
    image: '/news-cdmx.avif',
  },
];

const categories = [
  'Sostenibilidad',
  'Legislación',
  'Economía Circular',
  'Proyectos',
  'Eventos',
  'Colombia',
  'México',
  'LATAM',
  'Reciclaje',
];

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrar noticias según la categoría seleccionada
  const filteredNews = selectedCategory 
    ? newsArticles.filter(article => article.tags.includes(selectedCategory))
    : newsArticles;

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      // Si se hace clic en la misma categoría, quitar el filtro
      setSelectedCategory(null);
    } else {
      // Aplicar el filtro de la nueva categoría
      setSelectedCategory(category);
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#f7f7f7' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: '#4d2a00' }}>
          Inspírate<span style={{ color: '#f44336' }}>.</span>
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Columna Izquierda: Lista de Noticias */}
          <Box sx={{ flex: { xs: '1', md: '2' }, order: { xs: 1, md: 1 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {filteredNews.map((article, index) => (
                <Box key={article.title}>
                  <Box sx={{ display: 'flex', py: 3, borderBottom: index < filteredNews.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                    <Box sx={{ width: '30%', flexShrink: 0, mr: 3 }}>
                      <Image
                        src={article.image || 'https://via.placeholder.com/150'}
                        alt={article.title}
                        width={150}
                        height={100}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    </Box>
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                        {article.tags.slice(0, 2).map(tag => <Chip key={tag} label={tag.toUpperCase()} size="small" variant="outlined" color="success" />)}
                      </Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1, color: '#4d2a00' }}>
                        <MuiLink href={article.url} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                          {article.title}
                        </MuiLink>
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                        {article.summary}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Fuente: {article.source} - {article.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
              
              {/* Mensaje cuando no hay noticias para la categoría seleccionada */}
              {filteredNews.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="h6" color="text.secondary">
                    No hay noticias disponibles para la categoría &quot;{selectedCategory}&quot;
                  </Typography>
                  <Button 
                    onClick={() => setSelectedCategory(null)}
                    sx={{ mt: 2, color: '#ff6f00' }}
                  >
                    Ver todas las noticias
                  </Button>
                </Box>
              )}
            </Box>
          </Box>

          {/* Columna Derecha: Filtros */}
          <Box sx={{ flex: { xs: '1', md: '1' }, order: { xs: 2, md: 2 } }}>
            <Box sx={{ position: 'sticky', top: '24px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#4d2a00' }}>
                Clasificación
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {categories.map((category) => (
                  <Chip 
                    key={category} 
                    label={category.toUpperCase()} 
                    onClick={() => handleCategoryClick(category)}
                    clickable 
                    variant={selectedCategory === category ? "filled" : "outlined"}
                    color={selectedCategory === category ? "primary" : "default"}
                    sx={{
                      backgroundColor: selectedCategory === category ? '#ff6f00' : 'transparent',
                      color: selectedCategory === category ? 'white' : 'inherit',
                      '&:hover': {
                        backgroundColor: selectedCategory === category ? '#e66000' : 'rgba(0, 0, 0, 0.04)',
                      }
                    }}
                  />
                ))}
              </Box>
              
              {/* Botón para limpiar filtros */}
              {selectedCategory && (
                <Button 
                  onClick={() => setSelectedCategory(null)}
                  variant="text"
                  sx={{ mt: 2, color: '#ff6f00', textTransform: 'none' }}
                >
                  Limpiar filtros
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}