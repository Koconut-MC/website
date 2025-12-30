<script lang="ts">
	import YtEmbed from "../YtEmbed.svelte";

	const width: string = "750px";
	const height: string = "400px";
	const mobileHeight: string = "600px";
	const mobileWidth: string = "1100px";
</script>

<section class="videos">
	<YtEmbed
		{width}
		{height}
		{mobileHeight}
		{mobileWidth}
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
