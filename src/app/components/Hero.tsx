'use client';

import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';

export default function HomeHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw', // Ocupa todo el ancho de la ventana
        height: 'calc(100vh - 56px)', // Ocupa toda la altura menos la altura del header
        overflow: 'hidden', // Asegura que el GIF no se desborde
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Cambiado de 'center' a 'flex-start' para mover el contenido más arriba
        alignItems: 'flex-start', // Cambiado de 'center' a 'flex-start' para alinear a la izquierda
        color: 'white', // Color del texto principal
        textAlign: 'left', // Cambiado de 'center' a 'left'
        paddingLeft: { xs: '16px', md: 'calc((100vw - 1200px) / 2 + 16px)' }, // Ajustado para coincidir con Container maxWidth="lg"
        paddingTop: '15%', // Agregado padding superior para posicionar el contenido más arriba
      }}
    >
      {/* GIF de Fondo */}
      <Box
        component="img"
        src="/recycling_bg.gif" // Ruta de tu GIF. Asegúrate de colocarlo en la carpeta public
        alt="Fondo de reciclaje animado"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Cubre todo el espacio sin distorsionar
          zIndex: -1, // Envía el GIF al fondo
          filter: 'brightness(0.6)', // Oscurece un poco el GIF para que el texto resalte
        }}
      />

      {/* Contenedor para el contenido limitado a la mitad izquierda */}
      <Box sx={{ width: '50%', maxWidth: '50%' }}>
        {/* Mensaje Principal */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left', color: 'white' }}>
          Soluciones de reciclaje y gestión de residuos para tu circularidad<span style={{ color: '#f44336' }}>.</span>
        </Typography>

        {/* Contenedor de Botones y Texto */}
        <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Botón "Agenda una consulta gratis" */}
          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{
              backgroundColor: '#ff6f00', // Naranja
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '12px 25px',
              borderRadius: '8px',
              boxShadow: 'none', // Quitar sombra
              '&:hover': {
                backgroundColor: '#e66000', // Naranja más oscuro al pasar el ratón
                boxShadow: 'none', // Quitar sombra en hover
              },
            }}
          >
            Agenda una consulta
          </Button>

          {/* Texto "Regístrese" */}
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1.2rem' }}>
            <Link href="/register" passHref style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              Regístrate
            </Link>
          </Typography>
        </Box>
      </Box>
 
      {/* Modal de Consulta */}
      <ConsultationModal 
        open={isModalOpen} 
        handleClose={handleCloseModal} 
      />
    </Box>
  );
}

