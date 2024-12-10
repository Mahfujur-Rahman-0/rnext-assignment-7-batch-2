"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
	const [currentURL, setCurrentURL] = useState("");

	useEffect(() => {
		setCurrentURL(window.location.href);
	}, []);

	return (
		<div className="text-center text-5xl">
			<h1>{currentURL} not found!</h1>
		</div>
	);
}
