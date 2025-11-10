'use client';

import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { Language, Login, Logout } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/authStore';

interface AccessModalProps {
  open: boolean;
  handleClose: () => void;
  onOpenLoginModal: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: 24,
  p: 3,
};

const AccessModal: React.FC<AccessModalProps> = ({ open, handleClose, onOpenLoginModal }) => {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogin = () => {
    handleClose();
    onOpenLoginModal();
  };

  const handleRegister = () => {
    handleClose();
    router.push('/register');
  };

  const handleLogout = () => {
    logout();
    handleClose();
    router.push('/');
  };

  const handleLanguage = () => {
    // Aquí se puede implementar la funcionalidad de cambio de idioma
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="access-modal-title"
      BackdropProps={{
        style: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <Box sx={modalStyle}>
        <Box sx={{ position: 'relative', height: '80px' }}>
          {/* IDIOMA - Arriba a la izquierda */}
          <Button
            onClick={handleLanguage}
            sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              color: '#4d2a00', 
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: '0.875rem',
              p: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#ff6f00',
                textDecoration: 'none',
                '& .MuiSvgIcon-root': {
                  color: '#ff6f00'
                }
              }
            }}
          >
            <Language sx={{ fontSize: '0.875rem' }} />
            IDIOMA
          </Button>

          {/* INICIAR SESIÓN / CERRAR SESIÓN - Abajo a la izquierda */}
          {user ? (
            <Button
              onClick={handleLogout}
              sx={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                color: '#d32f2f', 
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                p: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#b71c1c',
                  textDecoration: 'none',
                  '& .MuiSvgIcon-root': {
                    color: '#b71c1c'
                  }
                }
              }}
            >
              <Logout sx={{ fontSize: '0.875rem' }} />
              CERRAR SESIÓN
            </Button>
          ) : (
            <Button
              onClick={handleLogin}
              sx={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                color: '#2e7d32', 
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                p: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#1b5e20',
                  textDecoration: 'none',
                  '& .MuiSvgIcon-root': {
                    color: '#1b5e20'
                  }
                }
              }}
            >
              <Login sx={{ fontSize: '0.875rem' }} />
              INICIAR SESIÓN
            </Button>
          )}

          {/* CERRAR - Abajo a la derecha */}
          <Button
            onClick={handleClose}
            variant="text"
            sx={{ 
              position: 'absolute',
              bottom: 0,
              right: 0,
              color: 'red', 
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '0.875rem',
              p: 0,
              display: 'flex',
              alignItems: 'center',
              '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' }
            }}
          >
            Cerrar X
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AccessModal;
