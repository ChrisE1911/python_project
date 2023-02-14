import { useDispatch, useSelector } from "react-redux";
import { thunkCurrentUserProfile } from "../../store/profile";

export default function MyProfile() {
    const user = useSelector((state) => state.profile.current_user_profile)

    return(
        <div className='discover_container'>
			<div className='discover_center_container'>
				<div className='top_container'>
					<div>
						<div className='left_div'>
							<h1>{user.firstname}</h1>
							<span>{user.profile.age}</span>
							<span>{user.profile.city}</span>
							<span>{user.profile.state}</span>
						</div>
						<div className='right_buttons'>
							<button onClick={handlePass}>PASS</button>
							<button onClick={handleLike}>LIKE</button>
						</div>
					</div>
					<div className='discover_image'>
						<img
							src={user.profile.userImages[0].picture_url}
							alt='profile-pic'
						/>
					</div>
				</div>
				<div className='bottom-container'>
					<div className='self_summary'>
						<h2>Self-Summary</h2>
						<p>{user.profile.bio}</p>
					</div>
					<div className='details'>
						<h5>{user.profile.sexual_orientation}</h5>
						<h5>{user.profile.height}</h5>
						<h5>{user.profile.body_type}</h5>
						<h5>{user.profile.ethnicity}</h5>
						<h5>{user.profile.language}</h5>
					</div>
				</div>
			</div>
		</div>
    )
}
