import ViewList from "@/components/ViewList/ViewList";
import React from "react";

const page = ({ listId }: any) => {
	console.log(listId);

	return (
		<div>
			<ViewList />
		</div>
	);
};

export default page;
