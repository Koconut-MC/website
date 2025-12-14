<script lang="ts">
	import images from "./Images";
	import ImageEnhancer, { image_enhancer } from "./Enhancer.svelte";
</script>

<section>
	<ImageEnhancer />
	{#each images as image}
		{@const image_name = `${image.display_name} - ${image.author_date}`}
		<button
			onclick={() => image_enhancer.set(image.file_name, image_name)}
			class="gallery-image"
			style:background-image={`url(/gallery/${image.file_name})`}
		>
			<div class="image-details">{image_name}</div>
		</button>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 30px;
		justify-items: center;
		margin: 30px 0 30px 0;
	}

	.image-details {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 40px;
		background-color: var(--element-clr-even);
	}
	.gallery-image {
		display: flex;
		padding: 0;
		width: 500px;
		height: 300px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		border: 0;
		overflow: hidden;
		transition: transform 0.5s;

		&:hover {
			transform: scale(1.05);
			transition: transform 0.3s;
			cursor: pointer;
		}
	}
</style>
