import getListById from "@/app/actions/getListById";
import getUserById from "@/app/actions/getUserById";
import ViewList from "@/components/ViewList/ViewList";
import React from "react";

const page = async (props: any) => {
	const listId = props.params.listId;
	const list = await getListById(listId);

	if (!list) return;

	const users = await Promise.all(
		list.userIds.map(async (userId: string) => {
			return await getUserById(userId);
		})
	);

	console.log(users);

	return (
		<div>
			<ViewList list={list} users={users} />
		</div>
	);
};

export default page;
