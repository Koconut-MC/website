<script lang="ts">
	interface Props {
		mobileHeight: string;
		height: string;
		width: string;
		id: string;
	}
	const { mobileHeight, width, height, id }: Props = $props();
</script>

<iframe
	{width}
	{height}
	style={"--mobile-height:" + mobileHeight}
	src={`https://www.youtube.com/embed/${id}`}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
>
</iframe>

<style>
	iframe {
		height: var(--mobile-height);
	}
</style>
