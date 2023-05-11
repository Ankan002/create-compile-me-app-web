import { validate } from "isemail";

interface Args {
	email: string;
	feedback: string;
}

export const submitFeedback = async (args: Args) => {
	const { email, feedback } = args;

	if (!validate(email)) {
		return {
			success: false,
			error: "Enter a valid email",
		};
	}

	if (feedback.length < 10 || feedback.length > 400) {
		return {
			success: false,
			error: "Enter a valid review!!",
		};
	}

	try {
		const response = await fetch("/api/feedback", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				email,
				feedback,
				password: process.env["NEXT_PUBLIC_ADMIN_PASSWORD"],
			}),
		});

		const data = await response.json();

        console.log(data);

		if (!data.success) {
			return {
				success: false,
				error: data.error ?? "Some Error Occurred!!",
			};
		}

		return {
			success: true,
		};
	} catch (error) {
		if (error instanceof Error) {
			return {
				success: false,
				error: error.message,
			};
		}

		return {
			success: false,
			error: "Internal Server Error!!",
		};
	}
};
