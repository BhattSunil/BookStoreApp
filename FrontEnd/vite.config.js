import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    commonjsOptions: {
      include: []
    },
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
