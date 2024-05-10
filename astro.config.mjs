import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://chat-snc.github.io',
  base: 'meshxweb',
  integrations: [tailwind()]
});