"use client";
import React, { useState } from "react";
import Input from "../Inputs/Input";

const AddPeopleToList = ({ list }: any) => {
	const [username, setUsername] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/add-user-to-list", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					listId: list.id,
				}),
			});

			const data = await response.json();
			if (response.ok) {
				console.log("User added to list successfully:", data);
				setUsername("");
			} else {
				console.error("Error adding user to list:", data.error);
			}
		} catch (error) {
			console.error("Error adding user to list:", error);
		}
	};

	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh]">
			<div className="flex flex-col items-center justify-center gap-4 text-neutral-950 bg-white w-[94vw] p-8 mx-auto h-[96vh] rounded-[1rem]">
				<h2 className="text-[2rem] exo">Add People to List</h2>
				<form onSubmit={handleSubmit} className="gap-4 flex flex-col w-full">
					<Input
						label="Username"
						name="username"
						value={username}
						onChange={(e: any) => setUsername(e.target.value)}
						type="text"
					/>
					<button
						type="submit"
						className="bg-indigo-200 text-neutral-700 font-normal rounded-full py-3 w-full text-center mt-4"
					>
						Add User to List
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddPeopleToList;
