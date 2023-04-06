import { useDispatch, useSelector } from "react-redux";
import { thunkCreateLike, thunkCreateDislike } from "../../store/like";
import "./Discover.css";
export default function ProfileCard({ user, updateUserNumber }) {
	const admirer_id = useSelector((state) => state.session.user);
	const hater_id = useSelector((state) => state.session.user);
	const like_receiver_id = user?.id;
	const hate_receiver_id = user?.id;
	console.log(like_receiver_id, "like_receiver_id");

	const dispatch = useDispatch();

	function handleLike(e) {
		// update Like Table
		e.preventDefault();
		updateUserNumber();
		dispatch(thunkCreateLike(like_receiver_id, admirer_id));
	}
	function handlePass(e) {
		// update Dislke Table
		e.preventDefault();
		updateUserNumber();
		dispatch(thunkCreateDislike(hate_receiver_id, hater_id));
	}
	function isImageLengthOne() {
		return user.profile.userImages.length !== 1;
	}

	function addDefaultSrc(ev) {
		ev.target.src = 'https://imgs.search.brave.com/j6LvyJzEO_tVPwInMfwerPZyHUE0NcuPIhjVzBN-cKc/rs:fit:375:500:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY1LzBi/L2E3LzY1MGJhNzM0/N2UyZDg3NTFjMTU3/YjcwZDc5MTEyM2I4/LmpwZw'
	}

	console.log(user.profile);
	return (
		<div className='discover_container'>
			<div className='discover_center_container'>
				<div className='top_container'>
					<div className='name-btn-container'>
						<div className='left_div'>
							<h1>{user.firstname}</h1>
							<span>{user.profile.age} {user.profile.city}, {user.profile.state}</span>
						</div>
						<div className='right_buttons'>
							<button className="dislike-button" onClick={handlePass}>
								<i class="fa-solid fa-xmark fa-2xl"></i>
								<div className="button-text">PASS</div>
							</button>
							<button className="like-button" onClick={handleLike}>
								<i class="fa-solid fa-heart fa-2xl"></i>
								<div className="button-text">LIKE</div>
							</button>
						</div>
					</div>
					<div className='discover_image'>
						{/* {isImageLengthOne ? (
							<img
								src={user.profile.userImages[0].picture_url}
								alt='profile-pic'
							/>
						) : (
							user.profile.userImages.map((img) => (
								<div key={img.id} className='profile-img-container'>
									<img src={img.picture_url} />
								</div>
							))
						)}


						*/}
						{user.profile.userImages.map((img) => (
							<div key={img.id} className='profile-img-container'>
								<img onError={addDefaultSrc} src={img.picture_url} />
							</div>
						))}
					</div>
				</div>
				<div className='bottom-container'>
					<div className='self_summary'>
						<h2>Self-Summary</h2>
						<p>{user.profile.bio}</p>
					</div>
					<div className='details'>
						<div className="details-field">
							<i class="fa-solid fa-shapes"></i>
							<h5 className="details-text">{`${user.profile.gender}  |  ${user.profile.sexual_orientation}`}</h5>
						</div>
						<div className="details-field">
							<i class="fa-solid fa-person"></i>
							<h5 className="details-text">{`${user.profile.height}  |  ${user.profile.body_type}`}</h5>
						</div>
						<div className="details-field">
							<i class="fa-solid fa-globe"></i>
							<h5 className="details-text">{`${user.profile.ethnicity} | ${user.profile.political_affiliation} | ${user.profile.language} | ${user.profile.education_level} | ${user.profile.occupation} | ${user.profile.religion} | ${user.profile.zodiac}`}</h5>
						</div>
						<div className="details-field">
							<i class="fa-solid fa-martini-glass-citrus"></i>
							<h5 className="details-text">{`${user.profile.smoker}  |  ${user.profile.drinker} | ${user.profile.marijuana} | ${user.profile.diet}`}</h5>
						</div>
						<div className="details-field">
							<i class="fa-solid fa-house"></i>
							<h5 className="details-text">{`${user.profile.kids} | ${user.profile.pets} `}</h5>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}

{
	/* <h5>{user.profile.height}</h5>
<h5>{user.profile.body_type}</h5>
<h5>{user.profile.ethnicity}</h5>
<h5>{user.profile.language}</h5>
<h5>{user.profile.religion}</h5>
<h5>{user.profile.political_affiliation}</h5>
<h5>{user.profile.kids}</h5>
<h5>{user.profile.pets}</h5>
<h5>{user.profile.diet}</h5>
<h5>{user.profile.smoker}</h5>
<h5>{user.profile.drinker}</h5>
<h5>{user.profile.marijuana}</h5>
<h5>{user.profile.zodiac}</h5>
{/* <h5>{user.profile.gender}</h5> */
}
{
	/* <h5>{user.profile.occupation}</h5>
<h5>{user.profile.education_level}</h5> */
}
