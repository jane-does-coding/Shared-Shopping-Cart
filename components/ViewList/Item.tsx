"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Item = ({ item }: any) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const variants = {
		hidden: { opacity: 0, x: 50 },
		visible: (i: any) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.1,
			},
		}),
	};

	const router = useRouter();

	const handleDelete = async () => {
		try {
			const response = await fetch(`/api/items`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: item.id }),
			});

			router.refresh();
			if (response.ok) {
				toast.success("Item deleted successfully");
			} else {
				toast.error("Failed to delete item");
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	const handleMarkAsDone = async () => {
		try {
			const response = await fetch(`/api/items`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: item.id, isBought: !item.isBought }),
			});

			router.refresh();
			if (response.ok) {
				toast.success("Item updated successfully");
			} else {
				toast.error("Failed to update item");
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	return (
		<div
			ref={ref}
			className={`p-2 rounded-md flex items-center justify-between ${
				item.isBought
					? "bg-neutral-300 opacity-45"
					: "bg-neutral-100 border-2 border-neutral-200/25"
			}`}
		>
			<div className="px-1">
				<h2
					className={`${
						item.isBought ? "text-neutral-700" : "text-neutral-900"
					}`}
				>
					{item.name}{" "}
					<span
						className={`${
							item.isBought ? "text-neutral-700" : "text-neutral-500"
						}`}
					>
						{`(${item.amount})`}
					</span>
				</h2>
				<div className="flex gap-2 my-2">
					{[`${item.store}`].map((store, index) => (
						<motion.span
							key={index}
							className={`py-1 px-3 rounded-full text-xs ${
								item.isBought
									? "bg-blue-300 text-neutral-800"
									: "bg-blue-200 text-neutral-800"
							}`}
							custom={index}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={variants}
						>
							{store}
						</motion.span>
					))}
				</div>
			</div>
			<div className="flex items-center justify-center gap-2">
				<button
					onClick={handleDelete}
					className="p-2 rounded-full bg-red-300/25"
				>
					<RxCross2 size={28} className="text-red-600" />
				</button>
				<button
					onClick={handleMarkAsDone}
					className="p-2 rounded-full bg-green-300/25"
				>
					<IoCheckmark size={28} className="text-green-600" />
				</button>
			</div>
		</div>
	);
};

export default Item;
