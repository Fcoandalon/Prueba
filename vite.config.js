import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegúrate de esto también
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  }
});
