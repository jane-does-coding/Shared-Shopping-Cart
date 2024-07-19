import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { username, listId } = body;

		if (!username || !listId) {
			return NextResponse.json(
				{ error: "Missing username or listId" },
				{ status: 400 }
			);
		}

		const user = await prisma.user.findUnique({
			where: { username },
		});

		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		const updatedUser = await prisma.user.update({
			where: { id: user.id },
			data: {
				listIds: {
					push: listId,
				},
			},
		});

		const updatedList = await prisma.list.update({
			where: { id: listId },
			data: {
				userIds: {
					push: user.id,
				},
			},
		});

		return NextResponse.json({ user: updatedUser, list: updatedList });
	} catch (error) {
		console.error("Error adding user to list:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
