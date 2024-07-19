import getListById from "@/app/actions/getListById";
import ViewList from "@/components/ViewList/ViewList";
import React from "react";

const page = async (props: any) => {
	const listId = props.params.listId;
	const list = await getListById(listId);

	return (
		<div>
			<ViewList list={list} />
		</div>
	);
};

export default page;
