// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Stack Sans Notch',
      cssVariable: '--font-display',
      weights: [300, 400, 700],
    },
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-ui',
      weights: [400, 500, 700],
    },
    {
      provider: fontProviders.google(),
      name: 'Short Stack',
      cssVariable: '--font-accent',
      weights: [400],
    },
  ],
});
