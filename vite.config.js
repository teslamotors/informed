import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './newdocs'
  },
  resolve: {
    alias: {
      informed: path.resolve(__dirname, './dist/esm')
    }
  }
  // esbuild: {
  //   loader: 'jsx'
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //       '.ts': 'tsx'
  //     }
  //   }
  // }
});
