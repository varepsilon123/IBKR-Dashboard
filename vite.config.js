import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow external connections
    port: 3000,
    watch: {
      usePolling: true // For Docker compatibility
    },
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'inputs/cacert_decrypted.pem')), // Path to your PEM file
      cert: fs.readFileSync(path.resolve(__dirname, 'inputs/cacert.pem')), // Use the same PEM file for the certificate
    },
    // proxy: {
    //   '/api': {
    //       target: 'https://localhost:5000/', // The backend server URL
    //       changeOrigin: true, // Changes the origin of the host header to the target URL
    //   },
    // },
  }
})
