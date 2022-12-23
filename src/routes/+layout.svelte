<script lang="ts">
	import '../app.css';
	import NavBar from '../lib/components/navbar/NavBar.svelte';
	import BackToTop from '../lib/components/navbar/BackToTop.svelte';
</script>

<NavBar />
<div class="container p-2">
	<slot />
</div>
<div class=" h-96" />
<div class=" h-96" />
<div class=" h-96" />
<BackToTop />
