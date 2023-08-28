import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api':{
        // 배포 URL
        target: "http://52.78.248.147:8080/",
        changeOrigin: true,
        // 로컬 URL
        // target: "http://localhost:8080/",
      }
    }
  }
})
