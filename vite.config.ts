import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: { enabled: true },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}']
        },
        includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'GDA Verified Network',
          short_name: 'GDA Network',
          description: 'Red de Logística y Seguridad Verificada',
          theme_color: '#101922',
          background_color: '#101922',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          icons: [
            {
              src: '/pwa-192x192.svg',
              sizes: '192x192',
              type: 'image/svg+xml',
              purpose: 'any maskable'
            },
            {
              src: '/pwa-512x512.svg',
              sizes: '512x512',
              type: 'image/svg+xml',
              purpose: 'any maskable'
            }
          ]
        }
      })
    ],
    // Definimos las variables de entorno de forma segura
    define: {
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
    },
    // Eliminamos el alias problemático que usaba path y __dirname
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, './src'), // ESTO ERA EL CULPABLE
      }
    }
  };
});
