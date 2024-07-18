import React from "react";

const Input = ({ data, label, handleChange }: any) => {
	return (
		<div className="relative w-full">
			<input
				id="title"
				type="text"
				value={data}
				onChange={handleChange}
				required
				placeholder=" "
				maxLength={25}
				className="peer w-full p-2 pt-6 pl-6 font-light bg-neutral-100/75 border-2 border-neutral-300/75 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-neutral-800"
			/>
			<label
				htmlFor="title"
				className="absolute text-md duration-150 transform -translate-y-3 top-5 left-6 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-neutral-800"
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
