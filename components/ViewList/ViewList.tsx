"use client";
import React from "react";
import { motion } from "framer-motion";
import Input from "../Inputs/Input";
import { signOut } from "next-auth/react";
import LinkButton from "../MainPage/LinkButton";

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			type: "spring",
			stiffness: 100,
		},
	}),
};

const MainPage = ({ currentUser, list }: any) => {
	const items = [];

	if (list) {
		items.push(
			<LinkButton
				key="view-list"
				text={"View List"}
				href={`/view-list/${list.id}`}
			/>,
			<LinkButton
				key="add-people"
				text={"Add people to your List"}
				href="/add-people-to-list"
			/>,
			<LinkButton
				key="create-item"
				text={"Create an Item"}
				href="/create-item"
			/>
		);
	} else {
		items.push(
			<LinkButton
				key="create-list"
				text={"Create a List"}
				href="/create-list"
			/>
		);
	}

	if (currentUser) {
		items.push(
			<LinkButton
				key="view-profile"
				text={"View Profile"}
				href="/view-profile"
			/>,
			<button
				key="signout"
				onClick={() => signOut()}
				className="w-full bg-indigo-100 text-neutral-700 font-normal rounded-full py-2 text-center"
			>
				Signout
			</button>
		);
	} else {
		items.push(
			<LinkButton key="login" text={"Login"} href="/login" />,
			<LinkButton key="register" text={"Register"} href="/register" />
		);
	}

	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh]">
			<div className="flex flex-col items-center justify-center gap-4 text-neutral-950 bg-white w-[94vw] p-8 mx-auto h-[96vh] rounded-[1rem]">
				{items.map((item, index) => (
					<motion.div
						key={index}
						custom={index}
						initial="hidden"
						animate="visible"
						variants={itemVariants}
						className="w-full"
					>
						{item}
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default MainPage;
