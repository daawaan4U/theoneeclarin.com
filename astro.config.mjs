import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [react(), sitemap(), partytown(), tailwind()],
	output: 'static',
});
