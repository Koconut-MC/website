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
	import { scale, fade } from "svelte/transition";

	const trans_duration: number = 300;
</script>

{#if image_enhancer.visible}
	<main transition:fade={{ duration: trans_duration }}>
		<div
			class="image-window"
			transition:scale={{ duration: trans_duration }}
		>
			<header>
				<p>{image_enhancer.image_name}</p>
				<div class="actions">
					<!-- download button -->
					<a title="Download" href={image_enhancer.image} download
						><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							height="100%"
							width="100%"
							fill="#e3e3e3"
							><path
								d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"
							/></svg
						></a
					>
					<!-- close button -->
					<button title="Close" onclick={() => image_enhancer.close()}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							height="100%"
							width="100%"
							fill="#e3e3e3"
							><path
								d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
							/></svg
						></button
					>
				</div>
			</header>
			<section>
				<div
					class="image-large"
					style={`background-image: url(${image_enhancer.image});`}
				></div>
			</section>
		</div>
	</main>
{/if}

<style>
	main {
		--header-height: 50px;

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

	header {
		--margin: 10px;

		background-color: var(--element-clr);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: var(--header-height);
		width: 100%;

		button,
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: transparent;
			font-weight: bold;
			margin-right: var(--margin);
			border: 0;
			padding: 0;
			width: 40px;
			height: 40px;
		}

		p {
			font-weight: bold;
			margin-left: var(--margin);
		}

		.actions {
			display: flex;
			gap: 5px;
		}
	}

	section {
		width: 100%;
		height: 100%;
	}

	.image-window {
		height: inherit;
		width: inherit;
	}

	.image-large {
		width: 100%;
		height: calc(100% - var(--header-height));
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
