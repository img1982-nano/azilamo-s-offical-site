<script lang="ts">
    import { page } from '$app/stores';
</script>
<div class="flex flex-col items-center justify-center min-h-screen">
    <img src="https://http.cat/{$page.status}" alt="{$page.status}_cat">
    <a class="bg-yellow-500 text-white p-2 rounded-md " href="/">ほーむにもどる　✈️</a>
</div>
