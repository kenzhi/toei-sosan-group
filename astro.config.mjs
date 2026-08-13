import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://toei-sosan.com',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'zh', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4321
  }
});
