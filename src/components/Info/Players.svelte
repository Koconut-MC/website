<script lang="ts">
	interface Player {
		id: string;
		name: string;
	}
	interface Players {
		online: number;
		max: number;
		sample: Player[];
	}
	interface McStatus {
		online: boolean;
		players: Players;
	}

	let showing_players = $state(false);

	async function mc_api(): Promise<McStatus> {
		const mc_server_info = await fetch(
			"https://eu.mc-api.net/v3/server/ping/smp.koconutmc.com",
		);
		return await mc_server_info.json();
	}
</script>

{#snippet show_players(response: McStatus)}
	<button onclick={() => (showing_players = !showing_players)}
		>{showing_players ? "Hide Players" : "Show Players"}</button
	>
	{#if showing_players}
		{#each response.players.sample as player}
			<div class="player">
				<img
					src={"https://crafatar-api.koconutmc.com/renders/head/" +
						player.id}
					alt=""
					height="30px"
				/>
				<p>{player.name}</p>
			</div>
		{/each}
	{/if}
{/snippet}

{#await mc_api() then response}
	<div class="server">
		{#if response.online}
			<p>
				<span class="yellow">{response.players.online}</span>/{response
					.players.max} Playing Now
			</p>
			{#if response.players.online > 0}
				{@render show_players(response)}
			{/if}
		{:else}
			<p class="red">Server Offline</p>
		{/if}
	</div>
{:catch error}
	<p class="red error">{error}</p>
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
	.error {
		text-align: center;
		font-weight: normal;
		font-size: 1.1rem;
	}
	.yellow {
		color: var(--special-clr);
	}
	.red {
		color: #c01e1e;
	}
</style>
