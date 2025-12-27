const header_pages: string[] = [
	"Home",
	"About",
	"Modpack",
	"Gallery",
	"Commands",
	"Map",
];

function to_anchor_link(page: string): string {
	return page === "Home"
		? "/"
		: "/" + page.charAt(0).toLowerCase() + page.slice(1);
}

export default header_pages;
export { to_anchor_link };
