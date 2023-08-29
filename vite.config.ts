import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api':{
        target: "http://52.78.248.147:8080/",
        changeOrigin: true,
      }
    }
  }
})
