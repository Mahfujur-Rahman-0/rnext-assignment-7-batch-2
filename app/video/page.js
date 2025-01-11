"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import getVideo from "./video";
import Image from "next/image";
import LanBtn from "../components/LanBtn";
import { getLang } from "./Lang";
import useDataContext from "../context/UseDataContext";

export default function Landing() {
	const { lang } = useDataContext();
	const [videodata, setVideodata] = useState(null);
	const [langData, setLangData] = useState(null);

	useEffect(() => {
		async function lCaller() {
			const video = await getVideo();
			const language = await getLang(!lang ? "en" : "bn");
			setVideodata(video);
			setLangData(language);
		}

		lCaller();
	}, [lang]);

	return (
		<div className="bg-color-bg text-white font-exo">
			<div className="w-28 py-4 mr-10 ml-auto">
				<LanBtn />
			</div>
			<div className="container mx-auto px-4 py-4">
				<header className="flex justify-between items-center mb-8">
					<div className="flex items-center space-x-8">
						<Image
							src="/logo.svg"
							width={340}
							height={40}
							alt="LWS Xstream Logo"
							className="h-6"
						/>
						<nav className=" hidden md:flex space-x-6">
							<a href="#" className="text-color-purple font-semibold">
								{langData?.opOne}
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								{langData?.opTwo}
							</a>
							<a href="#" className="text-gray-400 hover:text-white">
								{langData?.opThree}
							</a>
						</nav>
					</div>
					<div className="flex items-center space-x-4">
						<div className="relative">
							<input
								type="text"
								placeholder={langData?.search}
								className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
							/>
							<svg
								className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
						{/* <!-- যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন --> */}
						<Image
							width={32}
							height={32}
							src="/avatar.png"
							alt="User Avatar"
							className="w-8 h-8 rounded-full"
						/>
					</div>
				</header>

				<main className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
					<div className="lg:col-span-2">
						<h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
							{langData?.header}
						</h1>
						<p className="text-gray-400 mb-8">{langData?.headDiscription}</p>
					</div>
					<div className="lg:col-span-2">
						<div className="relative rounded-lg overflow-hidden">
							<iframe
								src="https://www.youtube.com/embed/0VtVPk7Zv9c"
								title="YouTube video player"
								className="w-full aspect-video"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>

							<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
								<div className="text-right">
									<span className="bg-color-purple text-white px-2 py-1 rounded text-sm">
										COMING SOON
									</span>
								</div>
								<div>
									<div className="text-4xl font-bold mb-2">04:03</div>
									<p className="text-sm">{langData?.Broadcast}</p>
								</div>
							</div>
						</div>
						<p className="mt-2 text-sm text-gray-400">
							Battle for the castle with Franck Jourdan and Eva703
						</p>
					</div>
				</main>

				<section className="mt-12">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-2xl font-semibold">{langData?.suggestions}</h2>
						<a
							href="#"
							className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
						>
							{langData?.viewAll}
						</a>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{videodata?.map((e) => (
							<div
								key={e.videoId}
								className="rounded-lg overflow-hidden bg-color-gray"
							>
								<Link href={`/video/${e.videoId}`}>
									<Image
										src={e.thumbnail}
										width={364}
										height={160}
										alt={e.title}
										className="w-full h-40 object-cover"
									/>
								</Link>
								<div className="p-2">
									<p className="font-semibold">{e.title}</p>
									<p className="text-sm text-gray-400">{e.channelTitle}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
