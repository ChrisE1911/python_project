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
		sessionUser && dispatch(thunkCurrentUserProfile());
	}, [dispatch]);

	return (
		<ul className='NavBar'>

			<li id="midcupid-logo">
				{sessionUser ? <NavLink exact to='/discover'>
					MidCupid
				</NavLink> : <NavLink exact to='/'>MidCupid</NavLink>}
			</li>

			{isLoaded && (
				<>
					<div id="nav-bar-left-side">
						<div id="nav-bar-buttons">
							<NavLink exact to='/discover'>
								{sessionUser && <button>Discover</button>}
							</NavLink>
							<NavLink exact to='/questions'>
								{sessionUser && <button>Questions</button>}
							</NavLink>
							<NavLink exact to='/likes-page'>
								{sessionUser && <button>Likes</button>}
							</NavLink>
						</div>

						<div id="nav-bar-right-side">
							<NavLink exact to='/profile/current_user'>
								{sessionUser && <button>My Profile</button>}
							</NavLink>
							<li>
								<ProfileButton user={sessionUser} />
							</li>
						</div>
					</div>
				</>
			)}
		</ul>
	);
}

export default Navigation;
