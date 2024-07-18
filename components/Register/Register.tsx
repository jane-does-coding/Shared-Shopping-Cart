import React from "react";
import Input from "../Inputs/Input";

const Register = () => {
	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh] exo">
			<div className="flex flex-col items-center justify-center gap-3 text-neutral-950 bg-white w-[94vw] p-4 mx-auto h-[96vh] rounded-[1rem]">
				<h2 className="text-[2rem] exo">Register</h2>
				<Input label={"Name"} />
				<Input label={"Username"} />
				<Input label={"Email"} />
				<Input label={"Password"} />
				<button className="bg-indigo-200 text-neutral-700 font-normal rounded-full py-3 w-full text-center mt-4">
					Register
				</button>
			</div>
		</div>
	);
};

export default Register;
