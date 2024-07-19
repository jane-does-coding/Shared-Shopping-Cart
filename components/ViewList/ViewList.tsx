import React from "react";
import Item from "./Item";

const ViewList = ({ list }: { list: any }) => {
	console.log(list);
	return (
		<div className="bg-indigo-400 h-screen w-[100vw] pt-[2vh]">
			<div className="flex flex-col items-center justify-center gap-4 text-neutral-950 bg-white w-[94vw] p-3 mx-auto h-[96vh] rounded-[1rem]">
				<h2 className="text-[2rem] exo">View List</h2>
				<div className="w-full">
					{list.items && list.items.length > 0 ? (
						<div className="flex flex-col gap-2">
							{list.items.map((item: any) => (
								<>
									{/* <div key={item.id} className="mb-3">
										<div className="p-4 border rounded-lg shadow-sm">
											<h4 className="text-lg font-semibold">{item.name}</h4>
											<p>
												<strong>Amount:</strong> {item.amount}
											</p>
											<p>
												<strong>Store:</strong> {item.store}
											</p>
											<p>
												<strong>Note:</strong> {item.note}
											</p>
										</div>
									</div> */}
									<Item item={item} />
								</>
							))}
						</div>
					) : (
						<p>No items found in this list.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ViewList;
