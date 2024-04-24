import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// build: {
  // rollupOptions: {
    // external: ['react-icons/io'],
  // },
// },
export default defineConfig({
  plugins: [react()],
})
