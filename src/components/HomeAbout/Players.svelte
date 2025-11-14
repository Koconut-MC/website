<script lang="ts">
	let showing_players = false;

	async function mc_api() {
		const mc_server_info = await fetch(
			"https://eu.mc-api.net/v3/server/ping/koconutmc.com",
		);
		return await mc_server_info.json();
	}
</script>

{#await mc_api() then response}
	<div class="server">
		{#if response.online}
			<p>
				<span class="yellow">{response.players.online}</span>/{response
					.players.max} Playing Now
			</p>
			{#if response.players.online > 0}
				<button on:click={() => (showing_players = !showing_players)}
					>{showing_players ? "Hide Players" : "Show Players"}</button
				>
				{#if showing_players}
					{#each response.players.sample as player}
						<div class="player">
							<img
								src={"https://crafatar.com/renders/head/" +
									player.id}
								alt={player.name}
								height="30px"
							/>
							<p>{player.name}</p>
						</div>
					{/each}
				{/if}
			{/if}
		{:else}
			<p class="red">Server Offline</p>
		{/if}
	</div>
{/await}

<style>
	p {
		font-weight: bold;
		font-size: 1.5rem;
		margin: 0;
		color: var(--text-clr);
	}
	button {
		font-size: 0.9rem;
		background-color: transparent;
		border: 0;
		width: fit-content;
		margin-inline: auto;
		color: rgb(100, 100, 100);
		text-decoration: underline;
	}

	.server {
		display: grid;
		justify-content: center;
		gap: 8px;
	}
	.player {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;

		p {
			font-weight: normal;
			font-size: 1.1rem;
		}
	}
	.yellow {
		color: var(--special-clr);
	}
	.red {
		color: #c01e1e;
	}
</style>
