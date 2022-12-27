<script lang="ts">
	import '../app.css';
	import { menu } from '../lib/slices';
	import { SliceZone } from '@prismicio/svelte';
	export let data;
	export const prerender = true;
</script>

<SliceZone slices={data.data.body} components={{ menu: menu }} />
<div class="container p-2">
	<slot />
</div>
<div class=" h-96" />
<div class=" h-96" />
<div class=" h-96" />
