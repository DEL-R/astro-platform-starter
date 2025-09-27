import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const site = process.env.DEPLOY_PRIME_URL || process.env.URL || 'https://kaptainkavern.netlify.app';

export default defineConfig({
    site,
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react(), sitemap()],
    adapter: netlify()
});
