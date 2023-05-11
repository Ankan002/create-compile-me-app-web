"use client";

type Props =
	| {
			inputLabel: string;
			placeholder: string;
			type: "single-line";
			value: string;
			onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	  }
	| {
			inputLabel: string;
			placeholder: string;
			type: "text-area";
			value: string;
			onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	  };

const TextInput = (props: Props) => {
	const { inputLabel, placeholder, type, value, onChange } = props;
	return (
		<div className="mt-5 lg:w-1/2 md:w-4/5 w-full flex flex-col justify-center">
			<h4 className="text-xl font-bold tracking-widest text-secondary-purple">
				{inputLabel}
			</h4>
			{type === "single-line" && (
				<input
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					className="w-full mt-2 border-2 px-2 py-1 text-lg outline-none border-primary-dark rounded-md tracking-wider bg-secondary-green shadow-md focus:shadow-primary-dark/50 font-fira-code text-secondary-purple"
				/>
			)}
			{type === "text-area" && (
				<textarea
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					className="w-full mt-2 resize-none border-2 px-2 py-1 text-lg outline-none border-primary-dark rounded-md tracking-wider bg-secondary-green shadow-md focus:shadow-primary-dark/50 font-fira-code text-secondary-purple"
				/>
			)}
		</div>
	);
};

export default TextInput;
