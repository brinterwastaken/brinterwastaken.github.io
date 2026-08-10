import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [tailwindcss(), vue()],
    preview: {
      allowedHosts: env.ALLOWED_HOSTS
        ? env.ALLOWED_HOSTS.split(",")
        : [],
    },
  };
});
