"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "../Inputs/Input";
import { useRouter } from "next/navigation";

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

const CreateItem = ({ list }: { list: any }) => {
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [store, setStore] = useState("");
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
					amount,
					store,
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
				router.push("/");
			} else {
				console.error("Error creating item:", data.error);
			}
		} catch (error) {
			console.error("Error creating item:", error);
		}
	};

	const inputs = [
		{ label: "Name", value: name, setValue: setName, type: "text" },
		{ label: "Amount", value: amount, setValue: setAmount, type: "text" },
		{ label: "Store", value: store, setValue: setStore, type: "text" },
	];

	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh]">
			<div className="flex flex-col items-center justify-center gap-4 text-neutral-950 bg-white w-[94vw] p-8 mx-auto h-[96vh] rounded-[1rem]">
				<h2>Create Item</h2>
				<form onSubmit={handleSubmit} className="gap-4 flex flex-col w-full">
					{inputs.map((input, index) => (
						<motion.div
							key={input.label}
							custom={index}
							initial="hidden"
							animate="visible"
							variants={itemVariants}
							className="w-full"
						>
							<Input
								label={input.label}
								name={input.label.toLowerCase()}
								value={input.value}
								onChange={(e: any) => input.setValue(e.target.value)}
								type={input.type}
							/>
						</motion.div>
					))}
					<motion.button
						initial="hidden"
						animate="visible"
						variants={itemVariants}
						custom={inputs.length}
						type="submit"
						className="bg-indigo-200 text-neutral-700 font-normal rounded-full py-3 w-full text-center mt-4"
					>
						Create Item
					</motion.button>
				</form>
			</div>
		</div>
	);
};

export default CreateItem;
