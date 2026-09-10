import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Guna asset relatif supaya build yang sama berfungsi di /karnival25tahun/ dan /festival/.
  base: './',
})
