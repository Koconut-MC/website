<script lang="ts">
	import Photos from "./Photos.svelte";
	import Videos from "./Videos.svelte";
</script>

<h1 id="videos">Videos</h1>
<Videos />
<h1 id="photos">Photos</h1>
<Photos />

<style>
	h1 {
		color: var(--special-clr);

		&::after {
			content: "";
			display: block;
			background-color: rgb(40, 40, 40);
			width: 60%;
			height: 1px;
			margin: 20px auto 20px auto;
		}
	}
</style>
