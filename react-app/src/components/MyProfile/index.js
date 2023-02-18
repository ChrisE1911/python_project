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

	return (
		<>
			{isLoaded && (
				<div className='discover_container'>
					<div className='discover_center_container'>
						<div className='top_container'>
							<div>
								<div className='left_div'>
									<span>{user?.age}</span>
									<span>{user?.city}</span>
									<span>{user?.state}</span>
								</div>
								<NavLink exact to={"/profile/edit"}>
									Edit Profile
								</NavLink>
								<NavLink exact to={"/pictures"}>
									Edit Pictures
								</NavLink>
								<div className='right_buttons'></div>
							</div>
							<div className='discover_image'>
								{
									image.map((img) =>
									<div key={img.id} className='profile-img-container'>
										<img src={img?.picture_url} alt='profile-pic' />
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
							<h5>{`${user?.gender}  |  ${user?.sexual_orientation}`}</h5>
							<h5>{`${user?.height}  |  ${user?.body_type}`}</h5>
							<h5>{`${user?.ethnicity} | ${user?.political_affiliation} | ${user?.language} | ${user?.education_level} | ${user?.occupation} | ${user?.religion} | ${user?.zodiac}`}</h5>
							<h5>{`${user?.smoker}  |  ${user?.drinker} | ${user?.marijuana} | ${user?.diet}`}</h5>
							<h5>{`${user?.kids} | ${user?.pets} `}</h5>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
