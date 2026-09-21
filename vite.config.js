import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  // Guna asset relatif supaya build yang sama berfungsi di /karnival25tahun/ dan /festival/.
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        jubilee: resolve(__dirname, 'baju-jubli-perak/index.html'),
      },
    },
  },
})
