<script lang="ts">
	import Clipboard from "../Clipboard.svelte";
</script>

<div class="button smp-url">
	<Clipboard width="300px" />
	<a class="click-to-join" href="/modpack/"
		>Click Here To Download The Modpack (Required)</a
	>
</div>

<style>
	div {
		display: grid;
	}
	.click-to-join {
		color: var(--text-clr-status);
		text-align: center;
		width: fit-content;
		margin: 15px auto 10px auto;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
