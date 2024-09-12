import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  host: true,
  port: 5173, // Make sure this matches the port you are using
  },
  
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
