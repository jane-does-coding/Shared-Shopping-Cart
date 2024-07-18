import React from "react";
import LinkButton from "./LinkButton";
import Input from "../Inputs/Input";

const MainPage = () => {
	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh]">
			<div className="flex flex-col items-center justify-center gap-4 text-neutral-950 bg-white w-[94vw] p-8 mx-auto h-[96vh] rounded-[1rem]">
				<LinkButton text={"Create a List"} href="/create-list" />
				<LinkButton
					text={"Add people to your List"}
					href="/add-people-to-list"
				/>
				<LinkButton text={"View List"} href="/view-list" />
				<LinkButton text={"Create an Item"} href="/create-item" />
				<LinkButton text={"Login"} href="/login" />
				<LinkButton text={"Register"} href="/register" />
				<Input />
			</div>
		</div>
	);
};

export default MainPage;
