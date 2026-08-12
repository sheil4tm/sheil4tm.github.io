// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sheil4tm.github.io',
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
});
