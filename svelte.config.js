import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    sveltePreprocess({
      scss: { includePaths: ['./src/css'] },
      postcss: true
    }),
    mdsvex({ extension: '.svx' })
  ],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
};

export default config;
