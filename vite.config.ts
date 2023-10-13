import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api':{
        target: "http://43.200.32.144:8080/",
        // target: "http://localhost:8080/",
        changeOrigin: true,
      },
    }
  }
})