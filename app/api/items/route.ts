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

export async function DELETE(req: any) {
	const { id } = await req.json();
	const currentUser = await getCurrentUser();

	if (!currentUser) return;

	try {
		const deletedItem = await prisma.item.deleteMany({
			where: {
				id: id,
				userId: currentUser.id,
			},
		});

		if (deletedItem.count === 0) {
			return NextResponse.json(
				{ error: "Item not found or unauthorized" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ message: "Item deleted successfully" });
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
