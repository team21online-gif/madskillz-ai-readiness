import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Using base: "./" makes the build use relative paths.
// This works for:
//   - Capacitor Android APK (loads from file://)
//   - Vercel / Netlify (root deploys)
//   - GitHub Pages with custom domain
//
// If deploying to GitHub Pages on a sub-path (like /repo-name/),
// change base to "/your-repo-name/" for the WEB build only.
// For Android builds, always keep "./".

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true
  }
});
