const player_count = document.getElementById("player-count");
const max_player = document.getElementById("player-max");
if (!(player_count && max_player))
	throw new Error(
		"Required elements are missing. player-count=" +
			player_count +
			" max_player=" +
			max_player,
	);

const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		const as_json = JSON.parse(this.responseText);
		player_count.innerText = as_json.players.online;
		max_player.innerText = as_json.players.max;
	}
});
xhr.open("GET", "https://eu.mc-api.net/v3/server/ping/koconutmc.com");
xhr.send();
