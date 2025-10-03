// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: process.env.CI ? '/native-scroll-delay' : '',
});
