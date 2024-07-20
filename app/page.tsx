import MainPage from "@/components/MainPage/MainPage";
import Image from "next/image";
import getListById from "./actions/getListById";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
	const currentUser: any = await getCurrentUser();
	let list;
	/* there might not be a list */
	if (currentUser?.listIds.length > 0) {
		list = await getListById(currentUser?.listIds[0]);
	} else {
	}
	/* 	console.log(list);
	 */
	return (
		<div className="exo">
			<MainPage currentUser={currentUser} list={list} />
		</div>
	);
}
