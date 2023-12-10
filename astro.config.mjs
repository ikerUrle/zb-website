import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import UnoCSS from '@unocss/astro';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
  import transformerVariantGroup from '@unocss/transformer-variant-group';

// https://astro.build/config
export default defineConfig({
   site: 'https://ikerurle.github.io',
  base: '/zb-website',
  integrations: [
    vue(),
    // tailwind(),
    UnoCSS({
      injectReset: true,
      transformers: [
        transformerVariantGroup(),
      ],
      presets: [
        presetUno(),
        presetIcons()
      ]
    })
  ]
});
