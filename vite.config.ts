import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Safely define process.env to an empty object to prevent "process is not defined" errors in browser
    'process.env': {} 
  }
});