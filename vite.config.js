import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'informed',
  build: {
    outDir: './docs'
  },
  resolve: {
    alias: {
      informed: path.resolve(__dirname, './dist/esm'),
      YourComponents: path.resolve(__dirname, './vitedocs/YourComponents'),
      Components: path.resolve(__dirname, './vitedocs/YourComponents')
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
