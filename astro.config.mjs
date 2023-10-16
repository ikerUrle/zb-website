import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import UnoCSS from '@unocss/astro';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';

// https://astro.build/config
export default defineConfig({
   site: 'https://ikerurl.github.io',
  base: '/zb-website',
  integrations: [
    vue(),
    // tailwind(),
    UnoCSS({
      injectReset: true,
      presets: [
        presetUno(),
        presetIcons()
      ]
    })
  ]
});
