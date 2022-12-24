<script lang="ts">
	import ThemeButton from '../components/navbar/ThemeButton.svelte';
	import BackToTop from '../components/navbar/BackToTop.svelte';
	import * as prismicH from '@prismicio/helpers';
	export let slice;

	let lightTheme = false;
	const t = ({ detail: { light } }) => {
		lightTheme = light;
	};
</script>

<!-- <pre>
{JSON.stringify(slice, null, 2)}
</pre> -->

<nav id="navbar" class="navbar bg-base-100 shadow">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost h-fit normal-case text-xl font-medium ">
			{#if slice.primary[`logo_image_${lightTheme ? 'light' : 'dark'}`].url}
				<!-- melhorar imagens carregar svg e tbm colocar srcset -->
				<img
					class="w-10 md:w-16"
					src={prismicH.asImageSrc(slice.primary[`logo_image_${lightTheme ? 'light' : 'dark'}`])}
					srcset={prismicH.asImageWidthSrcSet(
						slice.primary[`logo_image_${lightTheme ? 'light' : 'dark'}`]
					).srcset}
					alt={` logo ${prismicH.asText(slice.primary.nome_do_projeto)}`}
				/>
			{:else}
				{prismicH.asText(slice.primary.nome_do_projeto)}
			{/if}
		</a>
	</div>
	{#if slice.primary.themebutton}
		<ThemeButton on:themeLight={t} />
	{/if}
	<div class="flex-none" />
</nav>

{#if slice.primary.backtotopbutton}
	<BackToTop />
{/if}
