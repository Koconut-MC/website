<script lang="ts">
	interface Props {
		width: string;
		height: string;
		id: string;
	}
	const { width, height, id }: Props = $props();
</script>

<iframe
	{width}
	{height}
	src={`https://www.youtube.com/embed/${id}`}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
>
</iframe>
