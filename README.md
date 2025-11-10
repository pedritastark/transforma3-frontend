# Transforma3 - Frontend

Frontend de la plataforma Transforma3, construido con Next.js 15, TypeScript y Material-UI.

## 🚀 Tecnologías

- **Next.js 15.5** - Framework de React con Turbopack
- **TypeScript** - Tipado estático
- **Material-UI (MUI) v7** - Componentes de UI
- **Zustand** - Gestión de estado
- **Axios** - Cliente HTTP
- **React 19** - Biblioteca de UI

## 📋 Prerrequisitos

- Node.js 18 o superior
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone git@github.com:pedritastark/transforma3-frontend.git
cd transforma3-frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env.local` con las variables de entorno:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

Para producción:
```env
NEXT_PUBLIC_API_URL=https://tu-backend-url.com/api
```

## 🚀 Ejecutar el Proyecto

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`

### Build de Producción
```bash
npm run build
npm start
```

## 📦 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Build de producción con Turbopack
- `npm start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint

## 📁 Estructura del Proyecto

```
src/
├── app/                      # App Router de Next.js
│   ├── components/          # Componentes compartidos
│   ├── consultoria/         # Página de consultoría
│   ├── copilot/            # Página de Copilot
│   ├── dashboard/          # Dashboard de usuario
│   ├── demandas/           # Página de demandas
│   ├── empresas/           # Directorio de empresas
│   ├── login/              # Página de login
│   ├── marketplace/        # Marketplace de materiales
│   ├── publicaciones/      # Gestión de publicaciones
│   ├── register/           # Página de registro
│   ├── sobre-nosotros/     # Página Sobre Nosotros
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── hooks/                   # Custom React Hooks
├── services/               # Servicios de API
└── store/                  # Estado global (Zustand)
```

## 🎨 Características Principales

### Páginas
- **Home** - Página principal con hero y secciones de servicios
- **Marketplace** - Compra y venta de materiales reciclables
- **Empresas** - Directorio de empresas sostenibles
- **Consultoría** - Servicios de asesoría en economía circular
- **Copilot** - Herramienta de gestión y reportes
- **Dashboard** - Panel de control de usuario
- **Login/Register** - Autenticación de usuarios

### Componentes Principales
- `Header` - Navegación principal con autenticación
- `Footer` - Pie de página
- `Hero` - Sección hero de la página principal
- `MarketplaceProducts` - Lista de productos del marketplace
- `ConsultingSection` - Sección de consultoría
- `CopilotSection` - Sección de Copilot
- `NewsSection` - Sección de noticias

## 🌐 Variables de Entorno

### Desarrollo (`.env.local`)
- `NEXT_PUBLIC_API_URL` - URL del backend API (default: http://localhost:3001/api)

### Producción
- `NEXT_PUBLIC_API_URL` - URL del backend API en producción

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar el repositorio en Vercel
2. Configurar la variable de entorno `NEXT_PUBLIC_API_URL`
3. El build se ejecutará automáticamente

### Otros Servicios (Netlify, etc.)
1. Build command: `npm run build`
2. Output directory: `.next`
3. Configurar variables de entorno

## 🔗 Backend

Este frontend se conecta con el backend de Transforma3:
- Repository: [transforma3-backend](https://github.com/pedritastark/transforma3-backend)

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

- **Email**: contacto@transforma3.com
- **Website**: https://transforma3.com
