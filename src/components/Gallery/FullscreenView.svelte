<script module lang="ts">
	let visible: boolean = $state(false);
	let file_name: string = $state("");

	export function expandImage(file_name: string) {
		file_name = file_name;
		visible = true;
	}
</script>

{#if visible}
	<div class={["fullscreen-image", { visible }]}>
		<img src={`/gallery/${file_name}`} alt="" />
	</div>
{/if}

<style>
	.fullscreen-image {
		background-color: var(--element-clr);
		width: 100vw;
		height: 100vh;
		padding: 20px 100px 20px 100px;
		transform: translateY(100%);
		position: fixed;
		z-index: 999;
		transition: transform 0.3s ease-out;

		&.visible {
			/*transform: translateY(0%);*/
		}
	}
</style>
