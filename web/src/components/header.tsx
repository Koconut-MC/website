import { Link, useLocation } from "react-router";
import ExternalLink from "./externalLink";

interface NavigationButton {
	to: string;
	children: string;
}

function NavigationButton({ to, children }: NavigationButton) {
	const current_route = useLocation().pathname === to;

	return (
		<Link
			to={to}
			className={current_route ? "bg-selection-alpha text-white" : ""}
		>
			{children}
		</Link>
	);
}

function Navigation() {
	return (
		<div className="bg-element-dark w-full h-18 flex justify-between items-center border border-[#333333] rounded-2xl p-5">
			{/*Left - Logo*/}
			<Link
				to="/"
				className="flex justify-center items-center text-white gap-5 font-bold text-xl"
			>
				<img
					src="/koconutmc_logo.webp"
					alt="Home"
					className="h-13 rounded-md"
				/>
				<h1 className="text-[#999999]">Koconut MC</h1>
			</Link>

			{/*Right - Nav Buttons*/}
			<div className="[&_a:hover]:bg-selection-alpha [&_a:hover]:text-white [&_a]:p-3 [&_a]:rounded-2xl flex justify-center items-center gap-4 text-[#b3b3b3] text-md">
				<NavigationButton to="/">Home</NavigationButton>
				<NavigationButton to="/about">About</NavigationButton>
				<NavigationButton to="/modpack">Modpack</NavigationButton>
				<NavigationButton to="/gallery">Gallery</NavigationButton>
				<NavigationButton to="/commands">Commands</NavigationButton>
				<ExternalLink href="https://map.koconutmc.com/">
					Map
				</ExternalLink>
			</div>
		</div>
	);
}

function Header() {
	return (
		<header className="flex flex-col w-250 mx-auto my-5">
			{/*Header navigation bar*/}
			<Navigation />
			{/*Logo*/}
			<div className="mx-auto">
				<Link to="/">
					<img
						src="/koconutmc.webp"
						alt="Home"
						className="h-55 my-30 hover:scale-108 transition-transform duration-400"
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;
