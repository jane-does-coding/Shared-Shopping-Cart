import getCurrentUser from "@/app/actions/getCurrentUser";
import ViewProfile from "@/components/ViewProfile/ViewProfile";
import React from "react";

const page = async () => {
	const user = await getCurrentUser();
	return (
		<div>
			<ViewProfile currentUser={user} />
		</div>
	);
};

export default page;
