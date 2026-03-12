# Open Academy Software

Plataforma de gestión académica en línea construida con **Next.js**. Permite administrar cursos, usuarios y soporte técnico desde un único panel de control.

## Características principales

- **Autenticación** — inicio de sesión y recuperación de contraseña.
- **Catálogo de cursos** — listado y vista detallada de cada curso.
- **Perfil de usuario** — página de perfil personalizada por usuario.
- **Panel de control** — vista general del estado de la plataforma.
- **Panel de cursos** — gestión y administración de cursos.
- **Panel de usuarios** — administración de cuentas de usuario.
- **Panel de soporte técnico** — seguimiento de incidencias y solicitudes de soporte.

## Tecnologías

| Categoría | Tecnología |
|-----------|-----------|
| Framework | [Next.js 16](https://nextjs.org) + React 19 |
| Lenguaje  | TypeScript |
| Estilos   | Tailwind CSS v4 |
| Componentes UI | [Radix UI](https://www.radix-ui.com) + [shadcn/ui](https://ui.shadcn.com) |
| Iconos    | [Lucide React](https://lucide.dev) & [React Icons](https://react-icons.github.io/react-icons) |
| Notificaciones | [Sonner](https://sonner.emilkowal.ski) |

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior (o yarn / pnpm / bun)

## Instalación y puesta en marcha

```bash
# 1. Clonar el repositorio
git clone https://github.com/Urpirio/open-academy-sotfware.git
cd open-academy-sotfware

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Genera la versión de producción |
| `npm start` | Inicia el servidor en modo producción |
| `npm run lint` | Ejecuta el linter (ESLint) |

## Estructura del proyecto

```
open-academy-sotfware/
├── app/                        # Rutas y páginas (App Router de Next.js)
│   ├── page.tsx                # Página de inicio / login
│   ├── cursos/                 # Catálogo de cursos
│   ├── perfil/                 # Perfil de usuario
│   ├── panel-control/          # Panel de control
│   ├── panel-cursos/           # Panel de gestión de cursos
│   ├── panel-usuarios/         # Panel de gestión de usuarios
│   ├── panel-soporte-tecnico/  # Panel de soporte técnico
│   └── api/                    # Endpoints de la API
├── components/                 # Componentes reutilizables
│   ├── Components - Globales/  # Componentes globales (auth, hooks, UI)
│   ├── Components - Clases/    # Componentes específicos de clases
│   └── ui/                     # Componentes base de shadcn/ui
├── hooks/                      # Hooks personalizados globales
├── lib/                        # Utilidades y helpers
└── public/                     # Archivos estáticos
```

## Despliegue

La forma más sencilla de desplegar la aplicación es usando [Vercel](https://vercel.com):

1. Conectar el repositorio a Vercel.
2. Vercel detectará automáticamente que es un proyecto Next.js y configurará el despliegue.
3. Cada push a la rama principal generará un nuevo despliegue automático.

Para más detalles, consultar la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
