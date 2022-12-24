<script lang="ts">
	import { onMount } from 'svelte';

	let showBackToTop = false;

	onMount(() => {
		new IntersectionObserver((entries) => {
			showBackToTop = !entries[0].isIntersecting;
		}).observe(document.querySelector('.navbar'));
	});
</script>

{#if showBackToTop}
	<div class="fixed bottom-2 right-2 z-50">
		<a href="#navbar" class="btn btn-circle btn-ghost" aria-label="Volta para o topo da pagina">
			<i class="gg-arrow-up" />
		</a>
	</div>
{/if}
