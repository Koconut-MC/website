<script lang="ts">
	import mcsrvstat_api from "../Api/mcsrvstat";
	import Loading from "../Loading.svelte";
</script>

<footer>
	{#await mcsrvstat_api()}
		<Loading visible={true} width="150px" height="150px" />
	{:then response}
		{#if response.online}
			<p>
				<span class="yellow">{response.players.online}</span>/{response
					.players.max} Playing Now
			</p>
		{:else}
			<p class="red">Server Offline</p>
		{/if}
	{:catch error}
		<p class="red error">{error}</p>
	{/await}
</footer>

<style>
	p {
		text-align: center;
		font-size: 5rem;
		font-weight: bold;
	}

	.yellow {
		color: var(--special-clr);
	}
	.error {
		text-align: center;
		font-weight: normal;
		font-size: 1.1rem;
	}
	.yellow {
		color: var(--special-clr);
	}
	.red {
		color: var(--red);
	}
</style>
