import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-react-portfolio"
})

// open this in integrated terminal and type: npm run dev -- to run react app
