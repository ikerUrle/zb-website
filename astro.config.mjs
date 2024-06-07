import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import UnoCSS from '@unocss/astro';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import presetWebFonts from '@unocss/preset-web-fonts';
import transformerVariantGroup from '@unocss/transformer-variant-group';

// https://astro.build/config
export default defineConfig({
  site: 'https://ikerurle.github.io',
  base: '/',
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
        presetIcons(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: {
              name: 'ABeeZee',
              weights: ['100','200','300','400','500','600','700','800','900']
            }
          }
        })
      ]
    })
  ]
});
