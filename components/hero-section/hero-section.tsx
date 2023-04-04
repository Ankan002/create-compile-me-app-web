import { HeroActionBtn, TerminalAnimation } from "components/elements";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi"

const HeroSection = () => {
	return (
		<div className="h-screen w-full flex flex-col items-center px-3 py-4">
			<div className="flex-1 w-full flex flex-col items-center justify-center">
				<div className="flex flex-wrap items-center justify-center mt-8">
					<p className="md:text-6xl sm:text-5xl text-4xl mx-2 font-bold tracking-widest font-outline-2 text-primary-yellow break-all text-center">
						Think.
					</p>
					<p className="md:text-6xl sm:text-5xl text-4xl mx-2 font-bold tracking-widest font-outline-2 text-primary-green break-all text-center">
						Bootstrap.
					</p>
					<p className="md:text-6xl sm:text-5xl text-4xl mx-2 font-bold tracking-widest font-outline-2 text-primary-red break-all text-center">
						Build.
					</p>
				</div>

				<TerminalAnimation
					terminalCommands={["npx create-compile-me-app@latest"]}
				/>

				<div className="w-full flex flex-wrap items-center justify-center mt-5">
					<HeroActionBtn title="Feedback" redirectArrow={false} />
					<HeroActionBtn title="Docs" redirectArrow={true} />
				</div>
			</div>

			<div className="flex items-center justify-center">
				<Link href="#">
					<HiChevronDown className="text-4xl animate-bounce text-primary-red"/>
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
