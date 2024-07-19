import getCurrentUser from "@/app/actions/getCurrentUser";
import getListById from "@/app/actions/getListById";
import AddPeopleToList from "@/components/AddPeopleToList/AddPeopleToList";
import React from "react";

const page = async () => {
	const user = await getCurrentUser();
	const list = await getListById(user?.listIds[0]);

	return (
		<div>
			<AddPeopleToList list={list} />
		</div>
	);
};

export default page;
