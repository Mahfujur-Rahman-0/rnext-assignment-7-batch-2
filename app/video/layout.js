export default function RootLayout({ children, videos }) {
	return (
		<html lang="en">
			<body>
				{videos}
				{children}
			</body>
		</html>
	);
}
