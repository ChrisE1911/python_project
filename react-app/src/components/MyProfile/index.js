import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkCurrentUserProfile } from "../../store/profile";
import { NavLink } from "react-router-dom";

export default function MyProfile() {
	const dispatch = useDispatch();
	// Remember that you cannot access state more than two layers deep in one line!
	const user_main = useSelector((state) => state.profile);
	const user = user_main.profile;
	// Remember profile.current_user_profile.profile.userImages is an array
	const image = user?.userImages;

	useEffect(() => {
		dispatch(thunkCurrentUserProfile());
	}, [dispatch]);

	console.log("USER", user);

	return (
		<>
			<div className='discover_container'>
				<div className='discover_center_container'>
					<div className='top_container'>
						<div>
							<div className='left_div'>
								<h1>{user_main.firstname}</h1>
								<span>{user.age}</span>
								<span>{user.city}</span>
								<span>{user.state}</span>
							</div>
							<NavLink exact to={"/profile/edit"}>
								Edit
							</NavLink>
							<div className='right_buttons'></div>
						</div>
						<div className='discover_image'>
							<img src={image[0].picture_url} alt='profile-pic' />
						</div>
					</div>
					<div className='bottom-container'>
						<div className='self_summary'>
							<h2>Self-Summary</h2>
							<p>{user.bio}</p>
						</div>
						<div className='details'>
							<h5>{user.sexual_orientation}</h5>
							<h5>{user.height}</h5>
							<h5>{user.body_type}</h5>
							<h5>{user.ethnicity}</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
