import React from "react";

const ViewProfile = ({ currentUser }: any) => {
	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh]">
			<div className="flex flex-col items-center justify-center gap-4 text-neutral-950 bg-white w-[94vw] p-3 mx-auto h-[96vh] rounded-[1rem]">
				<h2>Name: {currentUser.name}</h2>
				<h2>Username: {currentUser.username}</h2>
				<h2>Email: {currentUser.email}</h2>
			</div>
		</div>
	);
};

export default ViewProfile;
