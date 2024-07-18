"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Input from "../Inputs/Input";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		const callback = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		setIsLoading(false);

		if (callback?.ok) {
			toast.success("Logged in");
			router.push("/");
			router.refresh();
		} else if (callback?.error) {
			toast.error(callback.error);
		}
	};

	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh] exo">
			<div className="flex  flex-col items-center justify-center gap-3 text-neutral-950 bg-white w-[94vw] p-4 mx-auto h-[96vh] rounded-[1rem]">
				<h1 className="slovensko text-[2rem] mx-auto mb-8 w-fit">Login</h1>
				<form onSubmit={handleSubmit} className="gap-2 flex flex-col w-full">
					<Input
						label="Email"
						name="email"
						value={email}
						onChange={(e: any) => setEmail(e.target.value)}
						type="text"
						disabled={isLoading}
					/>
					<Input
						label="Password"
						name="password"
						value={password}
						onChange={(e: any) => setPassword(e.target.value)}
						type="password"
						disabled={isLoading}
					/>
					<button
						type="submit"
						disabled={isLoading}
						className="bg-indigo-200 text-neutral-700 font-normal rounded-full py-3 w-full text-center mt-4"
					>
						{isLoading ? "Logging in..." : "Submit"}
					</button>
				</form>
				<div className="mt-4 text-neutral-500 text-sm flex gap-2 text-center items-center justify-center mx-auto">
					Don&apos;t have an account?{" "}
					<a href="/register" className="text-neutral-950">
						Register
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
