import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/index.scss";`,
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
