import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages: if your repo is named "website", set base to "/website/"
// For user/organization pages, set base to "/"
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/website/' : '/',
})

