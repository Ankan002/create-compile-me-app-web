import { HeroSection, Navbar } from "@/components";

export default function Home() {
	return (
		<main className="min-h-screen w-full flex flex-col bg-secondary-yellow font-quicksand">
			<Navbar />
			<HeroSection />
		</main>
	);
}
