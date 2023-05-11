import FeedbackInputSection from "./feedback-input-section";

const FeedbackSection = () => {
	return (
		<div
			className="p-5 bg-secondary-green flex flex-col items-center"
			id="feedback"
		>
			<h3 className="text-5xl tracking-widest font-extrabold text-primary-red drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				Feedback
			</h3>

			<p className="mt-8 text-xl text-center lg:w-1/2 md:w-4/5 w-full tracking-wider font-medium">
				Your feedback is really value for the improvement of our
				product. We would really appreciate if you can review you
				experience with our product.
			</p>

			<FeedbackInputSection />
		</div>
	);
};

export default FeedbackSection;
