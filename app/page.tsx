import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh]">
			<div className="flex flex-col items-center justify-center gap-4 text-neutral-950 bg-white w-[94vw] p-8 mx-auto h-[96vh] rounded-[1rem]">
				<a
					href="/"
					className="bg-indigo-100 text-indigo-500 font-semibold rounded-full py-1 w-full text-center"
				>
					Create a List
				</a>
				<a
					href="/"
					className="bg-indigo-100 text-indigo-500 font-semibold rounded-full py-1 w-full text-center"
				>
					Add people to your List
				</a>
				<a
					href="/"
					className="bg-indigo-100 text-indigo-500 font-semibold rounded-full py-1 w-full text-center"
				>
					View List
				</a>
				<a
					href="/"
					className="bg-indigo-100 text-indigo-500 font-semibold rounded-full py-1 w-full text-center"
				>
					Create an Item
				</a>
			</div>
		</div>
	);
}
