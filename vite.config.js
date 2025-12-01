import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/biomoleculai-v2/',
  build: {
    outDir: 'docs'          // 👈 打包到 docs 目录
  },
  plugins: [react()],
});
