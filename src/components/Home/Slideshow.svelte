<script lang="ts">
	import pictures from "../../ts/Gallery";

	let picture_index = Math.floor(Math.random() * pictures.length);
	let current_picture = $state(pictures[picture_index]);

	let auto_advance_interval: NodeJS.Timeout;

	function picture_display(advance: boolean) {
		//Purposely stop auto advancing all together when user intervention
		clearInterval(auto_advance_interval);

		if (advance) {
			picture_index += 1;
			if (picture_index === pictures.length) {
				picture_index = 0;
			}
		} else {
			picture_index -= 1;
			if (picture_index === -1) {
				picture_index = pictures.length - 1;
			}
		}
		current_picture = pictures[picture_index];
	}

	function auto_advance() {
		auto_advance_interval = setInterval(() => {
			picture_display(true);
			auto_advance();
		}, 5000);
	}
	auto_advance();
</script>

<main style={`background-image: url("/gallery/${current_picture.file_name}")`}>
	<header>
		<p class="title">{current_picture.display_name}</p>
		<div>
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
			<p>{current_picture.author_date}</p>
		</div>
	</header>
	<section>
		<button onclick={() => picture_display(false)}>&#10094;</button>
		<button onclick={() => picture_display(true)}>&#10095;</button>
	</section>
	<a href="/gallery" class="gallery-fullscreen"
		>Gallery <svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			height="24px"
			width="24px"
			fill="rgb(200, 200, 200)"
		>
			<path
				d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
			></path>
		</svg></a
	>
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

	div {
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

	.gallery-fullscreen {
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
