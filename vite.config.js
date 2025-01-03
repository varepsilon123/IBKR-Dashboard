import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: '.',
  envFile: 'env.list',
  server: {
    host: true, // Allow external connections
    port: 3000,
    watch: {
      usePolling: true // For Docker compatibility
    }
  }
})
