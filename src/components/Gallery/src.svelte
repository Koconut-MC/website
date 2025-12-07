<script lang="ts">
	import pictures from "../../ts/Gallery";
	import ImageEnhancer, { image_enhancer } from "./Enhancer.svelte";
</script>

<section>
	<ImageEnhancer />
	{#each pictures as picture}
		<button
			onclick={() =>
				image_enhancer.set(
					picture.file_name,
					`${picture.display_name} - ${picture.author_date}`,
				)}
			class="gallery-image"
			style={`background-image: url(/gallery/${picture.file_name});`}
		>
			<div class="image-details">
				{`${picture.display_name} - ${picture.author_date}`}
			</div>
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
