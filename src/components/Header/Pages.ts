const header_pages: string[] = [
	"Home",
	"About",
	"Modpack",
	"Gallery",
	"Commands",
	"Map",
];

function to_anchor_link(page: string): string {
	if (page === "Home") {
		return "/";
	} else if (page === "Map") {
		return "https://map.koconutmc.com/";
	}
	return "/" + page.charAt(0).toLowerCase() + page.slice(1);
}

export default header_pages;
export { to_anchor_link };
