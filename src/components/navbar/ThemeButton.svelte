<script lang="ts">
	let change = false;
	let icon = 'sun' || 'moon';

	const changeTheme = () => {
		change = !change;
		icon = change ? 'moon' : 'sun';
		document.getElementsByTagName('html')[0].setAttribute('data-theme', change ? 'light' : 'dark');
	};
</script>

<button class="btn btn-ghost" on:click={changeTheme}>
	<i class={`gg-${icon}`} />
</button>

<style>
	@import '../../../static/icons/sun.css';
	@import '../../../static/icons/moon.css';
</style>
