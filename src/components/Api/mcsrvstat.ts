interface McStatusPlayer {
	name: string;
	uuid: string;
}

interface McStatusPlayers {
	online: number;
	max: number;
	list: McStatusPlayer[];
}

interface McStatus {
	online: boolean;
	players: McStatusPlayers;
}

async function mcsrvstat_api(): Promise<McStatus> {
	const mc_server_info = await fetch(
		"https://api.mcsrvstat.us/3/smp.koconutmc.com",
	);
	return await mc_server_info.json();
}

export default mcsrvstat_api;
export { type McStatus, type McStatusPlayers, type McStatusPlayer };
