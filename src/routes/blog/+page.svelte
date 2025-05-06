<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
    export let data: {
      posts: { slug: string; title: string; about: string}[];
    };
  </script>
  
  <h1 class="text-4xl font-bold py-4">| Posts</h1>
  <div class="bg-stone-600">
    {#if data.posts.length}
        <ul>
            {#each data.posts as post}
                <li class="mb-2">
                <!-- title を出力 -->
                <a
                href={`/blog/${post.slug}`}
                class="font-mono font-bold text-black dark:text-white text-3xl"
                >
                PostTitle:{post.title}
                </a>
                <p class="font-mono font-bold text-black dark:text-white">{post.about}</p>
            </li>
            {/each}
        </ul>
    {:else}
        <p>投稿が見つかりませんでした。</p>
    {/if}
  </div>