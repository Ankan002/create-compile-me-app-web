import { HeroSection, Navbar, FeedbackSection } from "@/components";

export default function Home() {
	return (
		<main className="min-h-screen w-full flex flex-col bg-secondary-yellow font-quicksand">
			<Navbar />
			<HeroSection />
			<FeedbackSection />
		</main>
	);
}
