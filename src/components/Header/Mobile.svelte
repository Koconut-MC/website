<script lang="ts">
	import header_pages, { to_anchor_link } from "./Pages.ts";
	import { slide } from "svelte/transition";
	import Players from "./Players.svelte";

	interface Props {
		current: string;
	}
	const { current }: Props = $props();

	let menu_visible = $state<boolean>(false);

	function toggleMenu(enabled: boolean) {
		menu_visible = enabled;
		document.body.style.overflow = enabled ? "hidden" : "hidden visible";
	}
</script>

{#snippet hamburger_icon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 -960 960 960"
		height="100px"
		fill="#e3e3e3"
		><path
			d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
		/></svg
	>
{/snippet}

{#snippet close_icon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 -960 960 960"
		height="100px"
		fill="#e3e3e3"
		><path
			d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
		/></svg
	>
{/snippet}

<nav class="mobile-header">
	<section class="mobile-menu">
		<button onclick={() => toggleMenu(true)}
			>{@render hamburger_icon()} Menu</button
		>
	</section>
	{#if menu_visible}
		<main class="menu-background">
			<section class="menu" transition:slide={{ duration: 200 }}>
				<header class="menu-header">
					<h1>Menu</h1>
					<button onclick={() => toggleMenu(false)}
						>{@render close_icon()}</button
					>
				</header>
				<main class="menu-content">
					{#each header_pages as page}
						<a
							href={to_anchor_link(page)}
							data-current={current === page}>{page}</a
						>
					{/each}
				</main>
				<Players />
			</section>
		</main>
	{/if}
</nav>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border: 0;
		background-color: transparent;
		font-weight: bold;
		font-size: 3rem;
	}

	a {
		display: block;
		text-decoration: none;
		background-color: transparent;
		text-align: center;
		font-size: 4rem;
		padding: 70px;
		border: 2px solid var(--special-clr);

		&[data-current="true"] {
			color: black;
			background-color: var(--special-clr);
			font-weight: bold;
			border: 0;
		}
	}

	.mobile-header {
		display: flex;
		justify-content: left;
		align-items: center;
		display: none;
		z-index: -1;
		height: 150px;
		width: 100%;
		background-color: var(--element-clr-even);

		@media (max-width: 1300px) {
			display: flex;
			z-index: 999;
		}
	}

	.menu-background {
		display: grid;
		width: 100%;
		height: 100%;
		padding: 20px;
		left: 0;
		top: 0;
		padding: 0;
		position: fixed;
	}

	.menu {
		width: 100%;
		height: 100%;
		background-color: var(--element-clr-even);
	}

	.menu-header {
		--spacing: 40px;

		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--element-clr);
		width: 100%;
		height: 200px;
		padding: 0;
		font-size: 2rem;

		h1 {
			margin-left: var(--spacing);
		}
		button {
			margin-right: var(--spacing);
		}
	}

	.menu-content {
		display: grid;
		gap: 50px;
		width: 80%;
		margin-inline: auto;
		margin-top: 50px;
	}

	.mobile-menu {
		display: flex;
		justify-content: center;
		align-items: center;
		display: none;

		@media (max-width: 1300px) {
			display: block;
		}
	}
</style>
