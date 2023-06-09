"use client";

import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface Props {
	terminalCommands: Array<string>;
	copyText: string;
}

const TerminalAnimation = (props: Props) => {
	const { terminalCommands, copyText } = props;
	const [copyState, setCopyState] = useState<boolean>(false);

	const [text] = useTypewriter({
		words: terminalCommands,
		typeSpeed: 90,
		deleteSpeed: 40,
		delaySpeed: 1500,
		loop: 0,
	});

	const onCopyTextClick = () => {
		if (window !== undefined) {
			window.navigator.clipboard.writeText(copyText);
			setCopyState(true);
			setTimeout(() => {
				setCopyState(false);
			}, 1000);
		}
	};

	return (
		<div className="lg:w-1/2 md:w-2/3 sm:w-4/5 w-full border-2 border-primary-dark rounded-md px-5 py-3 bg-primary-yellow mt-8 flex items-center shadow-xl shadow-primary-dark/40 justify-between lg:min-h-0 min-h-[100px]">
			<p className="text-xl">
				<span className="text-primary-red">➜</span>
				<span className="ml-3 md:tracking-widest font-fira-code text-secondary-dark">
					{text}
				</span>
				<Cursor cursorBlinking={true} cursorColor="#D61C4E" />
			</p>

			<button
				className="rounded-full hover:shadow-md hover:shadow-primary-dark/40 p-2 border-2 border-primary-yellow hover:border-primary-dark"
				aria-label="copy command"
				onClick={onCopyTextClick}
			>
				{copyState ? (
					<MdCheck className="text-2xl text-dark-green" />
				) : (
					<MdContentCopy className="text-2xl text-primary-red" />
				)}
			</button>
		</div>
	);
};

export default TerminalAnimation;
