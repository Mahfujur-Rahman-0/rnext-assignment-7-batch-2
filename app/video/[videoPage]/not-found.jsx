export default function NotFound({ videoPage }) {
	return (
		<div className="text-center text-5xl">
			<h1>This video with ID {`"${videoPage}"`} was not found!</h1>
		</div>
	);
}
