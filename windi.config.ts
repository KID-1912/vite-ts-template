import { defineConfig } from "windicss/helpers";
import LineClamp from "windicss/plugin/line-clamp";

export default defineConfig({
  corePlugins: {
    // container: false, // disable container
  },
  extract: {
    include: ['**/*.{vue,html,jsx}'],
    exclude: ["node_modules", ".git", "dist"]
  },
  plugins: [LineClamp],
});
