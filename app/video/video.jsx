const getVideo = async () => {
	const videos = await import("@/app/api/data/videos.json");
	return videos.default;
};

export default getVideo;
