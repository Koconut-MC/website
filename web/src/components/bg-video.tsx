function BgVideo() {
	return (
		<video
			muted
			autoPlay
			loop
			className="min-w-full min-h-full pointer-events-none -z-10 fixed blur-[10px] brightness-[30%]"
		>
			<source src="/bg_video.mp4" type="video/mp4" />
		</video>
	);
}

export default BgVideo;
