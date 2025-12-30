<script lang="ts">
	interface Props {
		mobileHeight: string;
		mobileWidth?: string;
		height: string;
		width: string;
		id: string;
	}
	const {
		mobileHeight,
		mobileWidth = mobileHeight,
		width,
		height,
		id,
	}: Props = $props();
</script>

<iframe
	{width}
	{height}
	style={`--mobile-height: ${mobileHeight}; --mobile-width: ${mobileWidth}`}
	src={`https://www.youtube.com/embed/${id}`}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
>
</iframe>

<style>
	@media (max-width: 1000px) {
		iframe {
			height: var(--mobile-height);
			width: var(--mobile-width);
		}
	}
</style>
