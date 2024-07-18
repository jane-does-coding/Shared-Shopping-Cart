"use client";
import React, { useState } from "react";
import Input from "../Inputs/Input";

const Register = () => {
	const [form, setForm] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form),
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh] exo">
			<div className="flex  flex-col items-center justify-center gap-3 text-neutral-950 bg-white w-[94vw] p-4 mx-auto h-[96vh] rounded-[1rem]">
				<h2 className="text-[2rem] exo">Register</h2>
				<form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 ">
					<Input
						label="Name"
						name="name"
						value={form.name}
						onChange={handleChange}
					/>
					<Input
						label="Username"
						name="username"
						value={form.username}
						onChange={handleChange}
					/>
					<Input
						label="Email"
						name="email"
						value={form.email}
						onChange={handleChange}
						type="email"
					/>
					<Input
						label="Password"
						name="password"
						value={form.password}
						onChange={handleChange}
						type="password"
					/>
					<button
						type="submit"
						className="bg-indigo-200 text-neutral-700 font-normal rounded-full py-3 w-full text-center mt-4"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
