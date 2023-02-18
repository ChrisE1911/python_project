import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { thunkCurrentUserProfile } from "../../store/profile";
import "./Navigation.css";

function Navigation({ isLoaded }) {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const currentProfile = useSelector(
		(state) => state.profile.current_user_profile
	);
	const path = useLocation();
	console.log("WHAT PATH AM I", path);

	useEffect(() => {
		sessionUser && dispatch(thunkCurrentUserProfile());
	}, [dispatch]);

	const currentUserProfileArr = Object.values(currentProfile);

	function sessionCurrentProfileCheck() {
		if (sessionUser.id === currentProfile.id) {
			return false;
		} else {
			return true;
		}
	}

	if (path.pathname === "/profile/create")
		return <h1 className='alt-nav'>Complete the Form Below</h1>;

	return (
		path.pathname !== "/profile/create" && (
			<ul className='NavBar'>
				<li id='midcupid-logo'>
					{sessionUser ? (
						<NavLink exact to='/discover'>
							MidCupid
						</NavLink>
					) : (
						<NavLink exact to='/'>
							MidCupid
						</NavLink>
					)}
				</li>

				{isLoaded && (
					<>
						<div id='nav-bar-left-side'>
							<div id='nav-bar-buttons'>
								<NavLink exact to='/discover'>
									{sessionUser && (
										<button>
											<div className='discover-icon'>
												<i class='fa-regular fa-address-book'></i>
												Discover
											</div>
										</button>
									)}
								</NavLink>
								<NavLink exact to='/questions'>
									{sessionUser && (
										<button>
											<div className='discover-icon'>
												<i class='fa-solid fa-magnifying-glass'></i>
												Questions
											</div>
										</button>
									)}
								</NavLink>
								<NavLink exact to='/likes-page'>
									{sessionUser && (
										<button>
											<div className='discover-icon'>
												<i class='fa-regular fa-heart'></i>
												Likes
											</div>
										</button>
									)}
								</NavLink>
							</div>

							<div id='nav-bar-right-side'>
								<NavLink
									className='nav-my-profile-container '
									exact
									to='/profile/current_user'
								>
									{sessionUser && (
										<button className='logout-door-btn'>
											<i className='fas fa-user-circle fa-2xl' />
										</button>
									)}
								</NavLink>
								<li>
									<ProfileButton user={sessionUser} />
								</li>
							</div>
						</div>
					</>
				)}
			</ul>
		)
	);
}

export default Navigation;
