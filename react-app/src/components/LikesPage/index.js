import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { thunkGetAllLikes } from "../../store/like";
import LikeCard from "../LikesCard";
import "./LikesPage.css";

function LikesPage() {
	const dispatch = useDispatch();
	const allLikes = useSelector((state) => state.like.likes);
	const allLikesArr = Object.values(allLikes);
	const [loaded, setLoaded] = useState(false);
	console.log(allLikesArr);

	useEffect(() => {
		dispatch(thunkGetAllLikes()).then(() => setLoaded(true));
	}, [dispatch]);

	if (!allLikesArr.length)
		return (
			<div id='likes-empty'>
				<h1 id='outoflikes-id'>You haven't liked anybody</h1>
				<img
					style={{ width: "400px", height: "400px" }}
					src='https://res.cloudinary.com/teepublic/image/private/s--kyokDlWG--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ebebf0,e_outline:48/co_ebebf0,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1642961875/production/designs/27453267_0.jpg'
				></img>
			</div>
		);

	return (
		<>
			<h1 id='likespage-title'>Likes</h1>

			<div id='card-container'>
				<ul id='card-list'>
					{loaded &&
						allLikesArr.map((like) => {
							return <LikeCard key={like.id} like={like} />;
						})}
				</ul>
			</div>
		</>
	);
}

export default LikesPage;
