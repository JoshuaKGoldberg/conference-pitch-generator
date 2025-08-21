import "./globals.css";

export const metadata = {
	description:
		"Generates persuasive, personalized pitches to get your conference trip funded by your manager, teacher, or more.",
	title: "Conference Pitch Generator",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
