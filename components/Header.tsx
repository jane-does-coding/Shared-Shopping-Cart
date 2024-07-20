import React from "react";

const Header = ({ currentUser }: any) => {
	return (
		<div className="bg-neutral-100 border-[1px] border-neutral-200 text-neutral-800 w-[96vw] mx-auto ml-[2vw] top-[3vh] px-4 py-1 rounded-full fixed text-center flex items-center justify-center">
			{currentUser ? (
				<h2>Welcome Back, {currentUser.username}!</h2>
			) : (
				<h2>Not Logged in</h2>
			)}
		</div>
	);
};

export default Header;
