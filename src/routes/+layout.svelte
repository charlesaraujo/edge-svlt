<script lang="ts">
	import '../app.css';
	import NavBar from '../components/navbar/NavBar.svelte';
</script>

<div>
	<NavBar />
	<div class="container">
		<slot />
	</div>
</div>
