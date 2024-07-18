"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

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
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh]">
			<div className="flex flex-col items-center justify-center gap-4 text-neutral-950 bg-white w-[94vw] p-8 mx-auto h-[96vh] rounded-[1rem]">
				<h1 className="slovensko text-[2rem] mx-auto mb-8 w-fit">Login</h1>
				<form onSubmit={handleSubmit} className="gap-2 flex flex-col">
					<div className="w-full relative my-1">
						<input
							id="email"
							type="text"
							disabled={isLoading}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder=" "
							className="peer w-full p-2 pt-6 pl-6 font-light bg-neutral-100/75 border-2 border-neutral-300/75 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-neutral-800"
						/>
						<label
							className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
						>
							Email
						</label>
					</div>

					<div className="w-full relative my-1">
						<input
							id="password"
							type="password"
							disabled={isLoading}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder=" "
							className="peer w-full p-2 pt-6 pl-6 font-light bg-neutral-100/75 border-2 border-neutral-300/75 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-neutral-800"
						/>
						<label
							className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
						>
							Password
						</label>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full p-3 bg-neutral-950 text-white rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed mt-2"
					>
						{isLoading ? "Logging in..." : "Submit"}
					</button>
				</form>
				<div className="mt-4 text-neutral-500 text-sm flex gap-2 text-center items-center justify-center mx-auto">
					Don&apos;t have an account?{" "}
					<a href="/register" className="text-neutral-200">
						Register
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
