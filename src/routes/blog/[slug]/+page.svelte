<script lang="ts">
    import type { PageData } from './$types';
  
    export let data: PageData;
  </script>
  
  <article>
    <h1 class="font-bold text-black dark:text-white text-6xl flex justify-start mt-4">{data.title}</h1>
    <time class="text-black dark:text-white text-1xl">投稿日:{data.date}</time>
    <svelte:component this={data.content} />
  </article>