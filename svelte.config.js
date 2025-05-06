import adapter from '@sveltejs/adapter-cloudflare';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    sveltePreprocess({ scss: { includePaths: ['./src/css'] }, postcss: true }),
    mdsvex({ extension: '.svx' })
  ],
  kit: {
    adapter: adapter()
  }
};

export default config;
