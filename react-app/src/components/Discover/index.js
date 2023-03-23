import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk_discoverUsers } from "../../store/discover";
import { thunkGetMatches } from "../../store/match";
import ProfileCard from "../ProfileCard";
import "./Discover.css";

export default function Discover() {
	const [loaded, setLoaded] = useState(false);
	const [userNumber, setUserNumber] = useState(0);
	const dispatch = useDispatch();
	const discoverUsers = useSelector((state) => state.discover);

	const discoverUsers_arr = Object.values(discoverUsers.discover_users);
	let singleProfileToShow = discoverUsers_arr[userNumber];

	useEffect(() => {
		dispatch(thunk_discoverUsers())
			.then(() => dispatch(thunkGetMatches()))
			.then(() => setLoaded(true));
	}, [dispatch, loaded]);

	const updateUserNumber = async () => {
		setLoaded(false);
		if (userNumber === discoverUsers_arr.length - 1) {
			setUserNumber(0);
		}
	};

	if (discoverUsers_arr.length === 0) {
		return (
			<div id='discover-empty'>
				<h1 id='outofuser-h1'>All out of users</h1>
				<img
					style={{ width: "400px", height: "400px" }}
					src='http://www.dumpaday.com/wp-content/uploads/2013/08/food-bowl-for-a-cat-empty-funny-pictures1.jpg'
				></img>
			</div>
		);
	}

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
