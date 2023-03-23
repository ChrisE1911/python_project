import "./LikesCard.css";
import { useDispatch } from "react-redux";
import { thunkDeleteLike } from "../../store/like";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { thunkGetMatches } from "../../store/match";

const LikeCard = ({ like }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { pathname } = useLocation();
	const [likeArr, setLikeArr] = useState([]);
	const handleDelete = async () => {
		await dispatch(thunkDeleteLike(like.id))
			.then(() => {
				alert("You have un-liked this person");
			})
			.then(dispatch(thunkGetMatches()))
			.then(setLikeArr(like));
	};

	function addDefaultSrc(ev) {
		ev.target.src =
			"https://imgs.search.brave.com/j6LvyJzEO_tVPwInMfwerPZyHUE0NcuPIhjVzBN-cKc/rs:fit:375:500:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY1LzBi/L2E3LzY1MGJhNzM0/N2UyZDg3NTFjMTU3/YjcwZDc5MTEyM2I4/LmpwZw";
	}

	console.log("BBBBBB", like);
	return (
		<div className='likes-card'>
			{/* trying to add image from profile state */}
			<div className='likes-image'>
				<img
					onError={addDefaultSrc}
					src={like.profile.userImages[0].picture_url}
					style={{ width: "100px", height: "100px" }}
				></img>
			</div>
			<div>{`${like.firstname}, ${like.profile.age}`}</div>
			<div>
				<div>{`${like.profile.city}, ${like.profile.state}`}</div>
			</div>
			{/* Add onclick and handle delete like to this component */}
			{pathname === "/likes-page" && (
				<button className='dislike-button' onClick={handleDelete}>
					Delete
				</button>
			)}
		</div>
	);
};

export default LikeCard;
