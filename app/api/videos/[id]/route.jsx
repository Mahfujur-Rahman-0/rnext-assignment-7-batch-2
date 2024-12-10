import video from "@/app/api/data/videos.json";

export async function GET(request, { params }) {
	const VideoId = params.id;
	const SingleVideo = video.filter((vid) => vid.videoId == VideoId);
	return Response.json(SingleVideo.length == 0 ? video : SingleVideo);
}

export async function PATCH(request, { params }) {
	const editedData = await request.json();

	const VideoId = params.id;
	const videoIndex = video.findIndex((vidd) => vidd.videoId == VideoId);

	if (
		editedData.title &&
		editedData.description &&
		Object.keys(editedData).length === 2
	) {
		video[videoIndex].title = editedData.title;
		video[videoIndex].description = editedData.description;
	} else {
		return new Response(JSON.stringify({ error: "You can not set this" }));
	}

	if (videoIndex === -1) {
		return new Response(JSON.stringify({ error: "Video not found" }), {
			status: 404,
		});
	}
	return Response.json(video[videoIndex]);
}
export async function DELETE(request, { params }) {
	const VideoId = params.id;
	const videoIndex = video.findIndex((vidd) => vidd.videoId == VideoId);
	video.splice(videoIndex, 1);
	return new Response(
		JSON.stringify({ message: "Video deleted", Detail: video[videoIndex] }),
		{
			status: 200,
			headers: { "Content-Type": "application/json" },
		}
	);
}
