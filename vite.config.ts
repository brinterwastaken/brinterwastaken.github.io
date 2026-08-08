import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue()],
  server: {
    allowedHosts: [
      "neels-macbook-air.tailfed00d.ts.net",
      "neels-macbook-air",
      "imperiumpc.tailfed00d.ts.net",
      "imperiumpc",
    ],
  },
});
