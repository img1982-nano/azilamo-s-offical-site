<script>
    import "../app.pcss";
    import { OGP } from "@jill64/svelte-suite";
    import { FlipButton } from "@jill64/svelte-suite";
    import { ThemeManager } from "@jill64/svelte-suite";
    let { children } = $props();
</script>
<OGP 
    title="AzilamoOffical"
    description="AzilamoOffical's website"
    site_name="AzilamoOffical"
    image=""
/>
<ThemeManager />
<FlipButton />
{@render children()}