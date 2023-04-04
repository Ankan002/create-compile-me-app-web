"use client";

import { MdContentCopy } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface Props {
	terminalCommands: Array<string>;
}

const TerminalAnimation = (props: Props) => {
	const { terminalCommands } = props;

	const [text] = useTypewriter({
		words: terminalCommands,
		typeSpeed: 90,
		deleteSpeed: 40,
		delaySpeed: 1500,
		loop: 0,
	});

	return (
		<div className="lg:w-1/2 md:w-2/3 sm:w-4/5 w-full border-2 border-primary-dark rounded-md px-5 py-3 bg-primary-yellow mt-8 flex items-center shadow-xl shadow-primary-dark/40 justify-between">
			<p className="text-xl">
				<span className="text-primary-red">➜</span>
				<span className="ml-3 md:tracking-widest font-fira-code text-secondary-dark">
					{text}
				</span>
				<Cursor cursorBlinking={true} cursorColor="#D61C4E" />
			</p>

			<button className="text-primary-red rounded-full hover:shadow-md hover:shadow-primary-dark/40 p-2 border-2 border-primary-yellow hover:border-primary-dark">
				<MdContentCopy className="text-2xl" />
			</button>
		</div>
	);
};

export default TerminalAnimation;
