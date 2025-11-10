'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '../../store/authStore';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Divider,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import Language from '@mui/icons-material/Language';
import Login from '@mui/icons-material/Login';
import LoginModal from '../login/_components/LoginModal';
import AccessModal from './AccessModal';


// Logo actualizado a "T3"
const Logo = () => (
  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#f44336', lineHeight: 1.2 }}>
    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      T3
    </Link>
  </Typography>
);

const navItems = [
  { label: 'CONSULTORIA', href: '/consultoria' },
  { label: 'COPILOTO', href: '/copilot' },
  { label: 'SOBRE NOSOTROS', href: '/sobre-nosotros' },
  { label: 'MARKETPLACE', href: '/marketplace' },
  { label: 'EMPRESAS', href: '/empresas' },
];

function HeaderContent() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [isVisible, setIsVisible] = useState(false);

  // Estado para controlar la visibilidad del modal
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isAccessModalOpen, setAccessModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const handleDashboard = () => {
    router.push('/dashboard');
  };


  return (
    <>
      <AppBar position="fixed" sx={{ 
        backgroundColor: 'white', 
        color: 'black', 
        zIndex: 1300,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s ease-in-out'
      }} elevation={0}>
        <Toolbar sx={{ minHeight: '40px !important', py: 0.25 }}>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4, alignItems: 'center' }}>
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                <Button
                  component={Link}
                  href={item.href}
                  sx={{ color: 'black', textTransform: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}
                >
                  {item.label}
                </Button>
                {item.label === 'SOBRE NOSOTROS' && (
                  <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: 'rgba(0, 0, 0, 0.5)', height: '24px', alignSelf: 'center' }} />
                )}
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {user ? (
              <>
                <IconButton
                  size="large"
                  onClick={handleDashboard}
                  color="inherit"
                  sx={{ 
                    color: 'white',
                    backgroundColor: '#1976d2',
                    border: '1px solid #1976d2',
                    borderRadius: '50%',
                    width: 28,
                    height: 28,
                    boxShadow: '0 2px 4px rgba(25, 118, 210, 0.3)',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                      borderColor: '#1565c0',
                      boxShadow: '0 4px 8px rgba(25, 118, 210, 0.4)',
                      transform: 'translateY(-1px)',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <AccountCircle />
                </IconButton>
              </>
            ) : (
              <>
                <Button
                  variant="text"
                  onClick={() => setLoginModalOpen(true)}
                  sx={{ color: '#ff6f00', fontWeight: 'bold', fontSize: '0.85rem' }}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  variant="text" 
                  component={Link}
                  href="/register"
                  sx={{ ml: 1, color: '#ff6f00', fontWeight: 'bold', fontSize: '0.85rem' }}
                >
                  Registrarse
                </Button>
                <IconButton
                  size="large"
                  onClick={() => setAccessModalOpen(true)}
                  color="inherit"
                  sx={{ 
                    color: '#666666',
                    backgroundColor: '#f5f5f5',
                    border: '1px dashed #cccccc',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    '&:hover': {
                      backgroundColor: '#eeeeee',
                    }
                  }}
                >
                  <PersonIcon />
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Renderizamos los modales */}
      <LoginModal 
        open={isLoginModalOpen} 
        handleClose={() => setLoginModalOpen(false)} 
      />
      <AccessModal 
        open={isAccessModalOpen} 
        handleClose={() => setAccessModalOpen(false)}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />
    </>
  );
}

// Wrapper que evita la hidratación del servidor
export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <AppBar position="fixed" sx={{ 
        backgroundColor: 'white', 
        color: 'black', 
        zIndex: 1300,
        transform: 'translateY(0)',
        transition: 'transform 0.5s ease-in-out'
      }} elevation={0}>
        <Toolbar sx={{ minHeight: '40px !important', py: 0.25 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            T3
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  return <HeaderContent />;
}

