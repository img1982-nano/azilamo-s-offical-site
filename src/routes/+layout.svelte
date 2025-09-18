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
    <a class="text-bold text-2xl text-black dark:text-white" href="/links">Links</a>
    <a class="text-bold text-2xl text-black dark:text-white" href="/project">MyProject</a>
    <a class="text-bold text-2xl text-black dark:text-white" href="/about">About</a>
    <a class="text-bold text-2xl text-black dark:text-white" href="/">Home</a>
    <ThemeManager />
    <FlipButton />
</div>

<main class="container mx-auto p-6">
    {@render children()}
</main>
