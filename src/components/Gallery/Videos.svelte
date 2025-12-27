<script lang="ts">
	import YtEmbed from "../YtEmbed.svelte";

	const width: string = "900";
	const height: string = "400";
	const mobileHeight: string = "500px";
</script>

<section class="videos">
	<YtEmbed
		{width}
		{height}
		{mobileHeight}
		id="fVI3m3ejvcQ?si=IZUVI1tFvjzPmb73"
	/>
</section>

<style>
	.videos {
		display: grid;
		justify-content: center;
		align-items: center;
		gap: 50px;
	}
</style>
