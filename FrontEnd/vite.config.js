import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  preview: {
    port: 5173,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    assetsDir: 'assets',
    copyPublicDir: true
  }
});
