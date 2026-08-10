import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Automatically uses the repository name for production builds, and root for local development
    base: command === 'build' ? '/my-live-portfolio/' : '/',
  }
})




