"use client";

import { TextInput } from "@/components/elements";
import { useState } from "react";

const FeedbackInputSection = () => {
	const [emailId, setEmailId] = useState<string>("");
	const [feedback, setFeedback] = useState<string>("");

	return (
		<div className="w-full flex flex-col items-center justify-center">
			<TextInput
				type="single-line"
				inputLabel="Your Email"
				onChange={(e) => setEmailId(e.target.value)}
				placeholder="ankanbhattacharya89@gmail.com"
				value={emailId}
			/>

			<TextInput
				type="text-area"
				inputLabel="Enter your feedback"
				onChange={(e) => setFeedback(e.target.value)}
				placeholder="Enter your honest feedback here..."
				value={feedback}
			/>

			<div className="w-full flex items-center justify-center mt-5">
				<button
					className="text-xl bg-primary-yellow px-8 py-1 border-2 border-primary-dark rounded-md font-bold tracking-wide hover:shadow-md hover:shadow-primary-dark/30"
					aria-label="Submit Feedback"
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default FeedbackInputSection;
