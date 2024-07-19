import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, amount, store, note, listId } = body;
		const user = await getCurrentUser();

		if (!user || !name || !amount || !store || !listId) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		const newItem = await prisma.item.create({
			data: {
				name,
				amount,
				store,
				note,
				user: {
					connect: { id: user.id },
				},
				list: {
					connect: { id: listId },
				},
			},
		});

		const updatedUser = await prisma.user.update({
			where: { id: user.id },
			data: {
				items: {
					connect: { id: newItem.id },
				},
			},
		});

		const updatedList = await prisma.list.update({
			where: { id: listId },
			data: {
				items: {
					connect: { id: newItem.id },
				},
			},
		});

		return NextResponse.json({
			item: newItem,
			user: updatedUser,
			list: updatedList,
		});
	} catch (error) {
		console.error("Error creating item:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
