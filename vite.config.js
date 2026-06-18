import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/PowerFlex-Gym/',
  plugins: [
    react({
      babel: {
        presets: ['babel-preset-react-compiler']
      }
    })
  ],
})