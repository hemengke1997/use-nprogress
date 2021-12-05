import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...typescript2({
        check: true,
        tsconfig: path.resolve(__dirname, `tsconfig.json`),
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false,
          },
        },
      }),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    outDir: "dist",
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
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
    },
  },
});

