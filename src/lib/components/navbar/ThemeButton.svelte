<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	let change = false;
	let icon = 'sun' || 'moon';

	const changeTheme = () => {
		change = !change;
		ev();
		icon = change ? 'moon' : 'sun';
		document.getElementsByTagName('html')[0].setAttribute('data-theme', change ? 'light' : 'dark');
	};

	const ev = () => {
		dispatch('themeLight', {
			light: change
		});
	};

	onMount(() => {
		ev();
	});
</script>

<button class="btn btn-ghost" aria-label="muda cores da pagina" on:click={changeTheme}>
	<i class={`gg-${icon}`} />
</button>
