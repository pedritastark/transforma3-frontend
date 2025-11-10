'use client';

import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  IconButton,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Interfaz para las props del componente
interface ConsultationModalProps {
  open: boolean;
  handleClose: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

export default function ConsultationModal({ open, handleClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phonePrefix: '+57',
    phoneNumber: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    // Aquí iría la lógica para enviar los datos a un backend o a un servicio de email
    // Por ahora, solo mostraremos un mensaje de éxito
    console.log('Datos de consulta enviados:', formData);
    setSuccess('¡Gracias! Nuestros expertos te contactarán pronto.');
    setTimeout(() => {
        handleClose();
        setSuccess('');
    }, 3000);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="consultation-modal-title"
      BackdropProps={{
        style: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <Box sx={modalStyle}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}
        >
          <CloseIcon />
        </IconButton>

        <Typography id="consultation-modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#ff6f00' }}>
          Quiero una consulta gratuita
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          A un solo paso de ahorrar en la gestión de residuos.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
          Completa el formulario y nuestros expertos te llamarán.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              name="fullName" 
              label="Nombre completo" 
              fullWidth 
              required 
              onChange={handleChange}
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
              name="companyName" 
              label="Nombre de la empresa" 
              fullWidth 
              required 
              onChange={handleChange}
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
              name="email" 
              type="email" 
              label="Correo electrónico" 
              fullWidth 
              required 
              onChange={handleChange}
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
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField 
                name="phonePrefix" 
                label="Prefijo" 
                required 
                select 
                value="+57"
                disabled
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: '30%',
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6f00',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#ff6f00',
                  },
                }}
              >
                <MenuItem value="+57">+57</MenuItem>
              </TextField>
              <TextField 
                name="phoneNumber" 
                label="Número de teléfono" 
                required 
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: '70%',
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6f00',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#ff6f00',
                  },
                }}
              />
            </Box>
          </Box>
          
          {success && <Alert severity="success" sx={{ mt: 2, width: '100%' }}>{success}</Alert>}
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
                Enviar
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

