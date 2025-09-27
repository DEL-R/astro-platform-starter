import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://kaptainkavern.netlify.app',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react(), sitemap()],
    adapter: netlify()
});
