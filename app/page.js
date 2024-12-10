import getVideo from "./video/video";

import Landing from "./video/page";

export default async function Home() {
	const videodata = await getVideo();
	return <div></div>;
}
