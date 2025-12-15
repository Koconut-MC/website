<script lang="ts">
	import ImageEnhancer, { image_enhancer } from "./Enhancer.svelte";
	import images, { type Image } from "./Images";

	let picture_index = Math.floor(Math.random() * images.length);
	let current_picture = $state<Image>(images[picture_index]);

	let auto_advance_interval: NodeJS.Timeout;

	function picture_display(advance: boolean) {
		//Stop auto advancing when user intervention
		clearInterval(auto_advance_interval);

		if (advance) {
			picture_index += 1;
			if (picture_index === images.length) {
				picture_index = 0;
			}
		} else {
			picture_index -= 1;
			if (picture_index === -1) {
				picture_index = images.length - 1;
			}
		}
		current_picture = images[picture_index];
	}

	function auto_advance() {
		auto_advance_interval = setInterval(() => {
			picture_display(true);
			auto_advance();
		}, 5000);
	}

	function open_in_fullscreen() {
		clearInterval(auto_advance_interval);
		image_enhancer.set(
			current_picture.file_name,
			current_picture.display_name,
		);
	}

	auto_advance();
</script>

{#snippet camera_icon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 -960 960 960"
		height="24px"
		width="24px"
	>
		<path
			d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"
		></path>
	</svg>
{/snippet}

{#snippet open_link_icon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 -960 960 960"
		height="24px"
		width="24px"
		fill="rgb(200, 200, 200)"
	>
		<path
			d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
		></path>
	</svg>
{/snippet}

{#snippet open_in_full()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 -960 960 960"
		width="24px"
		fill="#e3e3e3"
		><path
			d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"
		/></svg
	>
{/snippet}

<main style:background-image={`url(/gallery/${current_picture.file_name})`}>
	<!-- image enhancer for fullscreen viewing -->
	<ImageEnhancer />
	<!-- image credits -->
	<header>
		<div class="title-credits">
			<p class="title">{current_picture.display_name}</p>
			<div class="credits">
				{@render camera_icon()}
				<p>{current_picture.author_date}</p>
			</div>
		</div>
		<button
			class="fullscreen-button"
			title="Open In Fullscreen"
			onclick={() => open_in_fullscreen()}
			>{@render open_in_full()}</button
		>
	</header>
	<!-- image advancement -->
	<section>
		<button onclick={() => picture_display(false)}>&#10094;</button>
		<button onclick={() => picture_display(true)}>&#10095;</button>
	</section>
	<!-- open gallery button -->
	<a href="/gallery" class="gallery"
		>Gallery
		{@render open_link_icon()}
	</a>
</main>

<style>
	main {
		--credit-clr: rgb(200, 200, 200);
		--pic-element-clr: rgba(0, 0, 0, 0.6);

		background-color: var(--element-clr);
		height: 440px;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 5px;
		margin-bottom: 35px;

		&:hover button {
			opacity: 1;
		}
	}

	header {
		display: flex;
		justify-content: space-between;
	}

	section {
		display: flex;
		justify-content: space-between;
		width: 95%;
		margin-inline: auto;
		top: 25%;
		position: relative;
	}

	button {
		font-weight: bold;
		font-size: 1.2rem;
		background-color: var(--pic-element-clr);
		border: 0;
		width: 40px;
		height: 70px;
		color: var(--credit-clr);
		opacity: 0;

		&:hover {
			background-color: black;
		}
	}

	p {
		margin: 0;
	}

	.credits {
		display: flex;
		align-items: center;
		background-color: var(--pic-element-clr);
		height: fit-content;
		width: fit-content;
		margin: 0 0 0;
		padding: 10px 15px 10px 10px;
		color: var(--credit-clr);

		svg {
			padding: 0 5px 0 0;
			fill: rgb(100, 100, 100);
		}
	}

	.fullscreen-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		border-top-right-radius: 5px;
	}

	.gallery {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #181818;
		height: 40px;
		font-weight: bold;
		gap: 10px;
		color: rgb(200, 200, 200);
		margin-top: 36%;

		&:hover {
			background-color: #222;
		}
	}

	.title {
		background-color: var(--pic-element-clr);
		font-weight: bold;
		margin: 0;
		padding: 10px;
		color: var(--text-clr);
		height: fit-content;
		width: fit-content;
		border-top-left-radius: 5px;
	}
</style>
