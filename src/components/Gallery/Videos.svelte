<script lang="ts">
	import YtEmbed from "../YtEmbed.svelte";

	const width: string = "700";
	const height: string = "400";
</script>

<section class="videos">
	<YtEmbed {width} {height} id="fVI3m3ejvcQ?si=IZUVI1tFvjzPmb73" />
</section>

<style>
	.videos {
		display: grid;
		justify-content: center;
		align-items: center;
		gap: 50px;
	}
</style>
