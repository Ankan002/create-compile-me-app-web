import { TerminalAnimation } from "components/elements";

const HeroSection = () => {
	return (
		<div className="flex-1 flex flex-col items-center justify-center px-3 py-4">
			<div className="flex flex-wrap items-center justify-center">
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
				terminalCommands={[
					"npx create-compile-me-app@latest"
				]}
			/>
		</div>
	);
};

export default HeroSection;
