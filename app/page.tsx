import MainPage from "@/components/MainPage/MainPage";
import Image from "next/image";
import getListById from "./actions/getListById";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
	const currentUser = await getCurrentUser();
	/* there might not be a list */
	const list = await getListById(currentUser?.listIds[0]);
	/* 	console.log(list);
	 */
	return (
		<div className="exo">
			<MainPage currentUser={currentUser} list={list} />
		</div>
	);
}
