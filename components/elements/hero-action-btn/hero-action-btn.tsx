"use client";

interface Props {
	title: string;
	redirectArrow: boolean;
}

const HeroActionBtn = (props: Props) => {
	const { title, redirectArrow } = props;

	return (
		<button className="border-2 border-primary-dark rounded-md px-5 py-1 mx-3 my-2 bg-primary-green text-lg tracking-wider font-bold hover:shadow-lg hover:shadow-primary-dark/40 hover:bg-secondary-green" aria-label={`go to ${title}`}>
			{title}
			{redirectArrow && <span className="ml-1 rotate-45">➜</span>}
		</button>
	);
};

export default HeroActionBtn;
