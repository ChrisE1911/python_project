import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { thunkGetMatches } from "../../store/match";

export default function MatchesPage() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(thunkGetMatches()).then(() => setLoaded(true));
	}, [dispatch]);
	return <h1>matches page</h1>;
}
