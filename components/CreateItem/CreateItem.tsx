"use client";
import React, { useState } from "react";
import Input from "../Inputs/Input";
import { useRouter } from "next/navigation";

const CreateItem = ({ list }: { list: any }) => {
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [store, setStore] = useState("");
	const [note, setNote] = useState("");
	const listId = list.id;
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/items/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					amount: parseInt(amount),
					store,
					note,
					listId,
				}),
			});

			const data = await response.json();
			if (response.ok) {
				console.log("Item created successfully:", data);
				// Reset form
				setName("");
				setAmount("");
				setStore("");
				setNote("");
				router.push("/");
			} else {
				console.error("Error creating item:", data.error);
			}
		} catch (error) {
			console.error("Error creating item:", error);
		}
	};

	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh]">
			<div className="flex flex-col items-center justify-center gap-4 text-neutral-950 bg-white w-[94vw] p-8 mx-auto h-[96vh] rounded-[1rem]">
				<h2>Create Item</h2>
				<form onSubmit={handleSubmit} className="gap-4 flex flex-col w-full">
					<Input
						label="Name"
						name="name"
						value={name}
						onChange={(e: any) => setName(e.target.value)}
						type="text"
					/>
					<Input
						label="Amount"
						name="amount"
						value={amount}
						onChange={(e: any) => setAmount(e.target.value)}
						type="number"
					/>
					<Input
						label="Store"
						name="store"
						value={store}
						onChange={(e: any) => setStore(e.target.value)}
						type="text"
					/>
					<Input
						label="Note"
						name="note"
						value={note}
						onChange={(e: any) => setNote(e.target.value)}
						type="text"
					/>
					<button
						type="submit"
						className="bg-indigo-200 text-neutral-700 font-normal rounded-full py-3 w-full text-center mt-4"
					>
						Create Item
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateItem;
