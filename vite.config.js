import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base must match the GitHub repo name: https://<user>.github.io/portfolioprarawi/
export default defineConfig({
  plugins: [react()],
  base: '/portfolioprarawi/',
})
