import React from "react";

const LinkButton = ({ href, text }: { href: string; text: string }) => {
	return (
		<a
			href={href}
			className="bg-indigo-100 text-neutral-700 font-normal rounded-full py-1 w-full text-center"
		>
			{text}
		</a>
	);
};

export default LinkButton;
