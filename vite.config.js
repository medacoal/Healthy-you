import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://healthy-you-be.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
});

