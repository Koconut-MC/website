<script lang="ts">
	const smp_domain = "smp.koconutmc.com";

	interface Props {
		width: string;
	}
	const { width }: Props = $props();

	let copied = $state<boolean>(false);
	let domain = $state<string>(smp_domain);

	function clipboard() {
		navigator.clipboard
			.writeText(domain)
			.then(() => {
				copied = true;
				domain = "Copied to clipboard!";
				setTimeout(() => {
					copied = false;
					domain = smp_domain;
				}, 5000);
			})
			.catch((error) => console.error(error));
	}
</script>

{#snippet clipboard_icon(visible: boolean)}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 -960 960 960"
		height="32px"
		width="32px"
		fill="var(--text-clr-status)"
		style:display={visible ? "none" : "block"}
	>
		<path
			d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
		>
		</path>
	</svg>
{/snippet}

<button onclick={clipboard} disabled={copied} style:width={`${width}`}>
	{@render clipboard_icon(copied)} {domain}</button
>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-weight: bold;
		font-size: 1.1rem;
		background-color: transparent;
		border: 1.5px solid var(--text-clr-status);
		color: var(--text-clr-status);
		height: 60px;
		margin: 20px auto 0 auto;
		padding: 15px 40px 15px 40px;

		&:hover,
		&:focus-visible {
			background-color: rgb(40, 40, 40);
		}
		&:disabled {
			cursor: not-allowed;
		}
	}
</style>
