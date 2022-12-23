<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { SliceZone } from '@prismicio/svelte';
	export let data;
	import * as components from '../lib/slices';
</script>

<SliceZone slices={data.data.body} {components} dev={true} />
<!-- <SliceZone slices={data.data} /> -->
<pre>
  <!-- 
  {@html prismicH.asHTML(data.document.data.home_page)}
  {@html prismicH.asHTML(data.document.data.campo_de_texto)} 
  -->
  <!-- {JSON.stringify(data, null, 2)} -->
</pre>
