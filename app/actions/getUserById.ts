import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getuserById(userId: any) {
	console.log(userId);

	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return null;
		}

		const user = prisma.user.findUnique({
			where: {
				id: userId,
			},
			include: {
				items: true,
			},
		});

		return user;
	} catch (err: any) {
		return null;
	}
}
