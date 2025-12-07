<script module lang="ts">
	class EnhanceImage {
		public visible = $state<boolean>(false);
		public image = $state<string | null>(null);
		public image_name = $state<string | null>(null);

		public set(file_name: string, image_name: string) {
			this.image = `/gallery/${file_name}`;
			this.image_name = image_name;
			this.visible = true;
			document.body.style.overflow = "hidden";
		}
		public close() {
			this.visible = false;
			document.body.style.overflow = "hidden visible";
		}
	}

	export const image_enhancer = new EnhanceImage();
</script>

<script>
	import { fade } from "svelte/transition";
</script>

{#if image_enhancer.visible}
	<main transition:fade={{ duration: 150 }}>
		<div>
			<header>
				<p>{image_enhancer.image_name}</p>
				<button onclick={() => image_enhancer.close()}>X</button>
			</header>
			<section>
				<img
					src={image_enhancer.image}
					alt={image_enhancer.image_name}
				/>
				<a href={image_enhancer.image} download>DOWNLOAD</a>
				<button onclick={() => image_enhancer.close()}>CLOSE</button>
			</section>
		</div>
	</main>
{/if}

<style>
	main {
		display: grid;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		z-index: 999;
		top: 0;
		position: fixed;
		backdrop-filter: blur(10px) brightness(30%);
	}
	div {
		background-color: var(--element-clr-even);
		height: 90vh;
		width: 90vw;
		border: 1px solid var(--special-clr);
	}
	header {
		--margin: 10px;

		background-color: var(--element-clr);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		width: 100%;

		p {
			font-weight: bold;
			margin-left: var(--margin);
		}
		button {
			font-weight: bold;
			margin-right: var(--margin);
			border: 0;
			border-radius: 100%;
			width: 30px;
			height: 30px;
		}
	}
	section {
		display: grid;
		justify-content: center;

		img {
			max-width: 90%;
			max-height: 90%;
			margin-inline: auto;
		}
	}
</style>
