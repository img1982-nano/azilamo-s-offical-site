
import { sveltePreprocess } from 'svelte-preprocess';  // :contentReference[oaicite:0]{index=0}
 import { mdsvex } from 'mdsvex';

 export default {
   extensions: ['.svelte', '.svx'],
   preprocess: [
    sveltePreprocess({
       scss: { includePaths: ['./src/css'] },
       postcss: true
     }),
     mdsvex({ extension: '.svx' })
   ],
   kit: {
     /* … */
   }
 };