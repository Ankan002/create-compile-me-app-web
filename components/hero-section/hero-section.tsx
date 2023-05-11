import { HeroActionBtn, TerminalAnimation } from "components/elements";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import HeroImage from "assets/images/create-compile-me-hero-image.png";
import Image from "next/image";

const HeroSection = () => {
	return (
		<div className="h-screen w-full flex flex-col items-center px-3 py-4">
			<div className="flex-1 w-full flex flex-col items-center justify-center mt-8">
				<Image
					src={HeroImage.src}
					width={HeroImage.width}
					height={HeroImage.height}
					alt="hero-image"
					className="rounded-full lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 w-28 h-28 border-2 border-primary-dark shadow-lg shadow-primary-dark/50"
				/>
				<div className="flex flex-wrap items-center justify-center mt-3">
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

				<p className="mt-5 text-lg lg:w-1/2 md:w-2/3 sm:w-4/5 w-full text-center tracking-wider font-semibold">
					The Fastest way to get started with a Javascript/Typescript
					Application.
				</p>

				<TerminalAnimation
					terminalCommands={["npx create-compile-me-app@latest"]}
					copyText="npx create-compile-me-app@latest"
				/>

				<div className="w-full flex flex-wrap items-center justify-center mt-5">
					<HeroActionBtn
						title="Feedback"
						redirectArrow={false}
						redirectTo="#feedback"
					/>
					<HeroActionBtn
						title="Docs"
						redirectArrow={true}
						redirectTo="https://www.npmjs.com/package/create-compile-me-app"
					/>
				</div>
			</div>

			<div className="flex items-center justify-center">
				<Link href="#" aria-label="know more">
					<HiChevronDown className="text-4xl animate-bounce text-primary-red" />
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
