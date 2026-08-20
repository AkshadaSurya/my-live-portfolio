import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({ 
    base: '/my-live-portfolio/',
    plugins: [react()],
    build:{
        outDir: 'docs',
        emptyOutDir: true,
    }
})
