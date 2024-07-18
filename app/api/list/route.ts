import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { listName } = body;
		const user = await getCurrentUser();

		if (!user || !listName) {
			return NextResponse.json(
				{ error: "Missing userId or listName" },
				{ status: 400 }
			);
		}

		const newList = await prisma.list.create({
			data: {
				name: listName,
				userIds: [user.id],
			},
		});

		const updatedUser = await prisma.user.update({
			where: { id: user.id },
			data: {
				listIds: {
					push: newList.id,
				},
			},
		});

		return NextResponse.json({ list: newList, user: updatedUser });
	} catch (error) {
		console.error("Error creating list:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
