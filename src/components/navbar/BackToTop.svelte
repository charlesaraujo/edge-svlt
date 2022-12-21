<script lang="ts">
	import { onMount } from 'svelte';

	let showBackToTop = false;

	const scroll = () => {
		const { innerWidth, innerHeight } = window;
		const { top, left, right, bottom, height } = document
			.querySelector('.navbar')
			.getBoundingClientRect();
		return !(top >= -height && left >= 0 && right <= innerWidth && bottom <= innerHeight);
	};

	const toTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	onMount(() => {
		document.onscroll = () => {
			showBackToTop = scroll();
		};
	});
</script>

{#if showBackToTop}
	<div class="fixed bottom-2 right-2 z-50">
		<button
			class="btn btn-circle btn-ghost"
			aria-label="Volta para o topo da pagina"
			on:click={toTop}
		>
			<i class="gg-arrow-up" />
		</button>
	</div>
{/if}
