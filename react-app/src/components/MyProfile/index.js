import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { thunkCurrentUserProfile } from "../../store/profile";
import { NavLink } from "react-router-dom";
import "./MyProfile.css"

export default function MyProfile() {
	const [isLoaded, setLoaded] = useState(false);
	const dispatch = useDispatch();
	// Remember that you cannot access state more than two layers deep in one line!
	const user_main = useSelector((state) => state.profile.current_user_profile);
	// console.log(user_main.profile.userImages, "USERMAIN.PROFILE.USERIMAGES");
	// console.log("USERMAIN", user_main);
	const user = user_main?.profile;
	// Remember profile.current_user_profile.profile.userImages is an array
	const image = user?.userImages;

	useEffect(() => {
		dispatch(thunkCurrentUserProfile()).then(() => setLoaded(true));
	}, [dispatch]);

	console.log("USER IN MYPROFILE", user);

	function addDefaultSrc(ev) {
		ev.target.src = 'https://imgs.search.brave.com/j6LvyJzEO_tVPwInMfwerPZyHUE0NcuPIhjVzBN-cKc/rs:fit:375:500:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY1LzBi/L2E3LzY1MGJhNzM0/N2UyZDg3NTFjMTU3/YjcwZDc5MTEyM2I4/LmpwZw'
	}

	return (
		<>
			{isLoaded && (
				<div className='discover_container'>
					<div className='discover_center_container'>
						<div className='top_container'>
							<div className="name-btn-container">
								<div className='left_div'>
									<h1>{user_main?.firstname}</h1>
									<span>{user?.age} {user?.city}, {user?.state}</span>
								</div>
								<div className="right_buttons">
								<NavLink className="edit-link" exact to={"/profile/edit"}>
									<div className="link-container">
										<i class="fa-solid fa-user-pen fa-xl"></i>
										<div className="button-text">
											Edit Profile
										</div>
									</div>
								</NavLink>
								<NavLink className="edit-link" exact to={"/pictures"}>
									<div className="link-container">
										<i class="fa-regular fa-image fa-xl"></i>
										<div className="button-text">
											Edit Pictures
										</div>
									</div>
								</NavLink>
								</div>
							</div>
							<div className='discover_image'>
								{
									image.map((img) =>
										<div key={img.id} className='profile-img-container'>
											<img onError={addDefaultSrc} src={img?.picture_url} alt='profile-pic' />
										</div>
									)
								}
							</div>
						</div>
						<div className='bottom-container'>
							<div className='self_summary'>
								<h2>Self-Summary</h2>
								<p>{user?.bio}</p>
							</div>
							<div className='details'>
								<div className="details-field">
									<i class="fa-solid fa-shapes"></i>
									<h5 className="details-text">{`${user?.gender}  |  ${user?.sexual_orientation}`}</h5>
								</div>
								<div className="details-field">
									<i class="fa-solid fa-person"></i>
									<h5 className="details-text">{`${user?.height}  |  ${user?.body_type}`}</h5>
								</div>
								<div className="details-field">
									<i class="fa-solid fa-globe"></i>
									<h5 className="details-text">{`${user?.ethnicity} | ${user?.political_affiliation} | ${user?.language} | ${user?.education_level} | ${user?.occupation} | ${user?.religion} | ${user?.zodiac}`}</h5>
								</div>
								<div className="details-field">
									<i class="fa-solid fa-martini-glass-citrus"></i>
									<h5 className="details-text">{`${user?.smoker}  |  ${user?.drinker} | ${user?.marijuana} | ${user?.diet}`}</h5>
								</div>
								<div className="details-field">
									<i class="fa-solid fa-house"></i>
									<h5 className="details-text">{`${user?.kids} | ${user?.pets} `}</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
