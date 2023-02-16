import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { thunkCurrentUserProfile } from "../../store/profile";
import "./Navigation.css";

function Navigation({ isLoaded }) {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

	useEffect(() => {
		sessionUser && dispatch(thunkCurrentUserProfile()) ;
	}, [dispatch]);

	return (
		<ul className='NavBar'>
			<li>
				{sessionUser ? <NavLink exact to='/discover'>
					MidCupid
				</NavLink> : <NavLink exact to='/'>MidCupid</NavLink>}
			</li>
			{isLoaded && (
				<>
					<NavLink exact to='/likes-page'>
						{sessionUser && <button>Likes</button>}
					</NavLink>
					<NavLink exact to='/profile/current_user'>
						{sessionUser && <button>My Profile</button>}
					</NavLink>
					<li>
						<ProfileButton user={sessionUser} />
					</li>
				</>
			)}
		</ul>
	);
}

export default Navigation;
