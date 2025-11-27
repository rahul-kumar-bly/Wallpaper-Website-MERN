import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server:{
    proxy:{
      '/app':{
        target: 'https://wallpaper-website-mern-production.up.railway.app',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
