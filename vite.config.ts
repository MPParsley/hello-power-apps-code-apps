import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Set to '/<repo-name>/' for project sites, or '/' for user/org sites
  base: process.env.GITHUB_PAGES ? '/hello-power-apps-code-apps/' : '/',
  server: {
    // Power Apps SDK requires the app to run on port 3000
    port: 3000,
    strictPort: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
