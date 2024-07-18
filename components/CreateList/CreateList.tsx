"use client";
import React, { useState } from "react";
import Input from "../Inputs/Input";

const CreateList = () => {
	const [listName, setListName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError]: any = useState(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch("/api/list", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ listName }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Something went wrong");
			}

			console.log("List created successfully:", data);
			// Reset form or navigate to another page
			setListName("");
		} catch (error) {
			console.error("Error creating list:", error);
			/* 			setError(error.message);
			 */
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh] exo">
			<div className="flex  flex-col items-center justify-center gap-3 text-neutral-950 bg-white w-[94vw] p-4 mx-auto h-[96vh] rounded-[1rem]">
				<h2 className="text-[2rem] exo">Create List</h2>
				<form onSubmit={handleSubmit} className="gap-2 flex flex-col w-full">
					<Input
						label="Name"
						name="list"
						value={listName}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setListName(e.target.value)
						}
						type="text"
						disabled={isLoading}
					/>
					{error && <p className="text-red-500">{error}</p>}
					<button
						type="submit"
						disabled={isLoading}
						className="bg-indigo-200 text-neutral-700 font-normal rounded-full py-3 w-full text-center mt-4"
					>
						{isLoading ? "Creating list..." : "Create List"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateList;
