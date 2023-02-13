import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk_discoverUsers } from "../../store/discover";
import ProfileCard from "../ProfileCard";

export default function Discover() {
	const [clicked, setClicked] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();
	const discoverUsers = useSelector((state) => state.discover);
	const discoverUsers_arr = Object.values(discoverUsers);
	const singleProfile = discoverUsers_arr[0];
	useEffect(() => {
		dispatch(thunk_discoverUsers()).then(() => setLoaded(true));
	}, [dispatch]);
	console.log(singleProfile, "SINGLEUSER");
	console.log(discoverUsers_arr, "allUSERS");

	// let i = 0;
	// const incrementI = (i) => {
	// 	i++;
	// };
	const handleClick = (e) => {
		console.log("CLICKED");
	};

	return loaded ? (
		<>
			<nav>
				<li>Discover (NAVIGATION)</li>
			</nav>
			<h1>Main HomePage</h1>
			<button onClick={handleClick}>Like</button>
			<ProfileCard user={singleProfile} />
		</>
	) : (
		<h1 className='loading-message'>Loading...</h1>
	);
}
