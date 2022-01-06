import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "use-nprogress",
      fileName: "index",
      formats: ["es", "umd"],
    },
    terserOptions: {
      compress: {
        keep_infinity: true,
        // Used to delete console in production environment
        drop_console: true,
      },
    },

    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "react",
        },
      },
      plugins: [
        typescript({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
          include: ["src/index.ts"],
        }),
      ],
    },
  },
});
