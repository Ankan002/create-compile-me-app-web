import { NextRequest, NextResponse } from "next/server";
import { getPrismaClient } from "@/config/get-prisma-client";
import { z } from "zod";

const CreateFeedbackRequestBodySchema = z.object({
	email: z.string().email(),
	feedback: z.string(),
	password: z.string(),
});

// ! This function is responsible creating a feedback

export const POST = async (req: NextRequest) => {
	try {
		const body = await req.json();

		const requestBodyValidationResult =
			CreateFeedbackRequestBodySchema.safeParse(body);

		if (!requestBodyValidationResult.success) {
			return NextResponse.json(
				{
					success: false,
					error: requestBodyValidationResult.error.errors[0].message,
				},
				{ status: 400 }
			);
		}

		const requestBody = requestBodyValidationResult.data;

		if (requestBody.password !== process.env["ADMIN_PASSWORD"]) {
			return NextResponse.json(
				{
					success: false,
					error: "Access Denied!!",
				},
				{ status: 401 }
			);
		}

		const prismaClient = getPrismaClient();

		const feedback = await prismaClient.feedback.create({
			data: {
				email: requestBody.email,
				feedback: requestBody.feedback,
			},
			select: {
				id: true,
				email: true,
				feedback: true,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: {
					feedback,
				},
			},
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json(
				{
					success: false,
					error: error.message,
				},
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{
				success: false,
				error: "Internal Server Error",
			},
			{ status: 500 }
		);
	}
};
