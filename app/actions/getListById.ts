import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getListById(listId: any) {
	console.log(listId);

	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return null;
		}

		const list = prisma.list.findUnique({
			where: {
				id: listId,
			},
			include: {
				items: true,
				users: true,
			},
		});

		return list;
	} catch (err: any) {
		return null;
	}
}
