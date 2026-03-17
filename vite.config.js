import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vercel usa raiz; GitHub Pages usa /blogterror/
  base: process.env.VERCEL ? '/' : '/blogterror/',
})