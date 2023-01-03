<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { SliceZone } from '@prismicio/svelte';
	export let data;
	import * as components from '../lib/slices';
	export const prerender = true; //render at build time // SSG
	// export const ssr = false //disable server rendering // like SPA
	// export const csr = false // disable javascript hydration // Only server side hydration

	// TODO:
	// Add PWA
	// Create Prismuc pages
	// Create configs in prismic to validate things in app like a featuretoggle
</script>

<SliceZone slices={data.data.body} {components} />

<pre>
  <!-- 
  {@html prismicH.asHTML(data.document.data.home_page)}
  {@html prismicH.asHTML(data.document.data.campo_de_texto)} 
  -->
  <!-- {JSON.stringify(data, null, 2)} -->
  <button class="btn btn-primary"> opass</button>
  <button class="btn btn-secondary"> opass</button>
</pre>
