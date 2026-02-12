import { Link } from "react-router";
import ExternalLink from "./externalLink";

function Navigation() {
	return (
		<div className="bg-element-dark w-full h-18 flex justify-between items-center border-b border-b-[#333333] p-5">
			{/*Left - Logo*/}
			<Link to="/">
				<img
					src="/koconutmc_logo.webp"
					alt="Home"
					className="h-13 rounded-md"
				/>
			</Link>
			{/*Right - Nav Buttons*/}
			<div className="[&_a:hover]:bg-selection-alpha [&_a:hover]:text-white [&_a]:p-3 [&_a]:rounded-2xl text-[#b3b3b3] text-md flex justify-center items-center gap-4">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/modpack">Modpack</Link>
				<Link to="/gallery">Gallery</Link>
				<Link to="/commands">Commands</Link>
				<ExternalLink href="https://map.koconutmc.com/">
					Map
				</ExternalLink>
			</div>
		</div>
	);
}

function Header() {
	return (
		<header className="flex flex-col">
			{/*Header navigation bar*/}
			<Navigation />
			{/*Logo*/}
			<div className="mx-auto">
				<Link to="/">
					<img
						src="/koconutmc.webp"
						alt="Home"
						className="h-60 my-30 hover:scale-108 transition-transform duration-400"
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;
