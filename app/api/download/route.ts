import { getPrismaClient } from "@/config/get-prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CreateDownloadRequestBodySchema = z.object({
	email: z.string().email(),
	template: z.string(),
	password: z.string(),
});

// ! This function is responsible creating a download
export const POST = async (request: NextRequest) => {
	try {
		const body = await request.json();

		const requestBodyValidationResult =
			CreateDownloadRequestBodySchema.safeParse(body);

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

		const download = await prismaClient.download.create({
			data: {
				email: requestBody.email,
				template: requestBody.template,
			},
			select: {
				id: true,
				email: true,
				template: true,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: {
					download,
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
