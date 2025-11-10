'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuthStore } from '@/store/authStore';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import Link from 'next/link';

// Definimos la interfaz para las props del componente
interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({ open, handleClose }: LoginModalProps) {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email,
        password,
      });

      const { token, user } = response.data;
      setAuth(token, user);
      handleClose(); // Cierra el modal al iniciar sesión
      router.push('/dashboard'); // Redirige al dashboard
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || 'Error al iniciar sesión.');
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="login-modal-title"
      BackdropProps={{
        style: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <Box sx={modalStyle}>


        <Typography id="login-modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#ff6f00' }}>
          Iniciar Sesión
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ff6f00',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#ff6f00',
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ff6f00',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#ff6f00',
              },
            }}
          />
          
          <Button variant="text" sx={{ p: 0, mt: 1, textTransform: 'uppercase', color: 'black', fontWeight: 'bold' }}>
            Olvidé mi contraseña
          </Button>

          {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 3 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ 
                  backgroundColor: '#ff6f00',
                  color: 'white',
                  '&:hover': { backgroundColor: '#e66000' },
                  borderRadius: '8px',
                  padding: '10px 20px',
                  boxShadow: 'none',
                }}
              >
                Iniciar Sesión
              </Button>
              <Button 
                component={Link} 
                href="/register" 
                onClick={handleClose}
                variant="text" 
                sx={{ textTransform: 'uppercase', color: 'black', fontWeight: 'bold' }}>
                Registrarse
              </Button>
            </Box>
            
            <Button
              onClick={handleClose}
              variant="text"
              sx={{ 
                color: 'red', 
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' }
              }}
            >
              Cerrar X
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

