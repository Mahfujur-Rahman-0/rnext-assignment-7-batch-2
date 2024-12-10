import video from "@/app/api/data/videos.json";

export async function GET() {
	return Response.json(video);
}
