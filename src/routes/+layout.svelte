<script>
    import "../app.pcss";
    import { OGP } from "@jill64/svelte-suite";
    import { FlipButton } from "@jill64/svelte-suite";
    import { ThemeManager } from "@jill64/svelte-suite";
    let { children } = $props();
</script>
<OGP 
    title="Azilamo"
    description="Azilamo's website"
    site_name="Azilamo"
    image="/ogp-img-1.png"
/>
<div class="flex justify-end gap-5 mt-2">
    <a class="text-bold text-2xl text-yellow-500 dark:text-yellow-300" href="https://azifly.azilamo.com">Azifly-Club(🚧)</a>
    <a class="text-bold text-2xl text-black dark:text-white" href="/project">MyProject</a>
    <a class="text-bold text-2xl text-black dark:text-white" href="/blog">Blog</a>
    <a class="text-bold text-2xl text-black dark:text-white" href="/about">About</a>
    <a class="text-bold text-2xl text-black dark:text-white" href="/">Home</a>
    <ThemeManager />
    <FlipButton />
</div>
{@render children()}