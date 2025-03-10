<script>
    import "../app.pcss";
    import { OGP } from "@jill64/svelte-suite";
    let { children } = $props();
</script>

<OGP 
    title="あじらものサイト"
    description="あじらもが作ったサイト"
    site_name="あじらものサイト"
    image=""
/>
{@render children()}