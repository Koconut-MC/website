import { ExternalLink as ExternalLinkIcon } from "lucide-react";

interface ExternalLink {
	href: string;
	children: string;
}

function ExternalLink({ href, children }: ExternalLink) {
	return (
		<a href={href} className="flex justify-center items-center gap-1.5">
			{children} <ExternalLinkIcon className="h-5" />
		</a>
	);
}

export default ExternalLink;
