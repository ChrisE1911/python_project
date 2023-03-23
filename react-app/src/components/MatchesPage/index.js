import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetMatches } from "../../store/match";
import LikeCard from "../LikesCard";

export default function MatchesPage() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();
	const allMatchesObj = useSelector((state) => state.matchesReducer.matches);
	const allMatches = Object.values(allMatchesObj);
	console.log("allmatches", allMatches);
	useEffect(() => {
		dispatch(thunkGetMatches()).then(() => setLoaded(true));
	}, [dispatch]);
	return (
		<>
			<h1 id='likespage-title'>Matches</h1>
			<div id='card-container'>
				<ul id='card-list'>
					{loaded &&
						allMatches.map((like) => {
							return <LikeCard key={like.id} like={like} />;
						})}
				</ul>
			</div>
		</>
	);
}
