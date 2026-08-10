import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({ 
    plugins: [react()],
    // Automatically uses the repository name for production builds, and root for local development
    base: '/my-live-portfolio/',
 })
