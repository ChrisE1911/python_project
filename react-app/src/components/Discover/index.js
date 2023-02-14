import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk_discoverUsers } from "../../store/discover";
import ProfileCard from "../ProfileCard";

export default function Discover() {
	const [loaded, setLoaded] = useState(false);
	const [userNumber, setUserNumber] = useState(0);
	const dispatch = useDispatch();
	const discoverUsers = useSelector((state) => state.discover);
	const discoverUsers_arr = Object.values(discoverUsers);
	let singleProfileToShow = discoverUsers_arr[userNumber];
	useEffect(() => {
		dispatch(thunk_discoverUsers()).then(() => setLoaded(true));
	}, [dispatch, loaded]);
	// console.log(discoverUsers_arr, "allUSERS");

	const updateUserNumber = async () => {
		setLoaded(false);
		if (userNumber === discoverUsers_arr.length - 1) {
			setUserNumber(0);
		} else {
			setUserNumber(userNumber + 1);
		}
	};

	console.log("singleProfileToShow", singleProfileToShow);

	return loaded ? (
		<>
			<ProfileCard
				user={singleProfileToShow}
				updateUserNumber={updateUserNumber}
			/>
		</>
	) : (
		<h1 className='loading-message'>Loading...</h1>
	);
}