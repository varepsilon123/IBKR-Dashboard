/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Optional HTTPS for the dev server: only enabled when both cert files exist in ./inputs
const keyPath = path.resolve(import.meta.dirname, 'inputs/cacert_decrypted.pem')
const certPath = path.resolve(import.meta.dirname, 'inputs/cacert.pem')
const https = fs.existsSync(keyPath) && fs.existsSync(certPath)
  ? { key: fs.readFileSync(keyPath), cert: fs.readFileSync(certPath) }
  : undefined

// iBeam gateway address as seen by the dev server (not the browser).
// Docker Compose sets this to https://ibeam:5000 (container network, no macOS clash).
// On the host it defaults to https://localhost:5050, the host port compose publishes iBeam on.
const gatewayUrl = process.env.IBEAM_GATEWAY_URL || 'https://localhost:5050'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Allow external connections
    port: 3000,
    watch: {
      usePolling: true // For Docker compatibility
    },
    https,
    proxy: {
      // Browser calls /v1/api/... on the dev server; forwarded to the gateway (self-signed cert, so secure: false)
      '/v1/api': {
        target: gatewayUrl,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
})
