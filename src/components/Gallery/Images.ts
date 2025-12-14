interface Image {
	file_name: string;
	display_name: string;
	author_date: string;
	hidden: boolean;
}

const images: Image[] = [
	{
		file_name: "koconut_factory_train_hypabit.webp",
		display_name: "Koco's Factory Train",
		author_date: "hypabit, 11/6/25",
		hidden: false,
	},
	{
		file_name: "jacobs_house_jacobthewolf.webp",
		display_name: "Jacob's House",
		author_date: "Jacob The Wolf, 11/6/25",
		hidden: false,
	},
	{
		file_name: "light_at_the_end_of_the_tunnel_hypabit.webp",
		display_name: '"Light at the end of the tunnel"',
		author_date: "hypabit, 11/5/25",
		hidden: false,
	},
	{
		file_name: "logans_island.webp",
		display_name: "Logan's Island",
		author_date: "DraconicLogan, 11/28/25",
		hidden: false,
	},
	{
		file_name: "spawn_koconut.webp",
		display_name: "Spawn Horizon",
		author_date: "Koco, 10/14/25",
		hidden: false,
	},
	{
		file_name: "aether_portal_draconiclogan.webp",
		display_name: "Aether Portal",
		author_date: "DraconicLogan, 11/6/25",
		hidden: false,
	},
	{
		file_name: "the_end_draconiclogan.webp",
		display_name: "The End",
		author_date: "DraconicLogan, 10/29/25",
		hidden: false,
	},
];

export default images;
export { type Image };
