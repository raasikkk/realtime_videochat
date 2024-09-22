import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // Ensures assets are served from relative paths
  plugins: [react()],
})