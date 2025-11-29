import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Prevents 'process is not defined' error in some third-party libs
    // This is crucial for Vercel deployment to work smoothly
    'process.env': {} 
  }
});