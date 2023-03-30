import "./globals.css";

export const metadata = {
	title: "Create Compile Me App",
	description: "The future of bootstrapping projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
