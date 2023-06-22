import { defineConfig } from "vite";

import { join } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@rwy/props": join(__dirname, "node_modules/@rwy/props/dist"),
    },
  },
  plugins: [],
});
