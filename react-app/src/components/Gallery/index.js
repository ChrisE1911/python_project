import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
	thunkCreateMorePictures,
	thunkDeletePicture,
	thunkGetAllPictures,
} from "../../store/picture";
import { NavLink } from "react-router-dom";

// Will render all pictures as a gallery, rest is up for discussion

export default function Gallery() {
	const dispatch = useDispatch();
	const [newUrl, setNewUrl] = useState("");
	const gallery = useSelector((state) => state.pictureReducer.allPictures);
	// Convert to array
	const [loaded, setLoaded] = useState(false);
	const galleryArr = Object.values(gallery);

	// State and console log below getting hit @ localhost:3000/pictures
	useEffect(() => {
		dispatch(thunkGetAllPictures()).then(() => setLoaded(true));
	}, [dispatch]);

	function createPicture(e) {
		e.preventDefault();
		let picture_url = newUrl;
		console.log("NEW URL", picture_url);
		dispatch(thunkCreateMorePictures(picture_url)).then(() =>
			dispatch(thunkGetAllPictures()).then(() => setNewUrl(""))
		);
	}
	async function deletePicture(id) {
		await dispatch(thunkDeletePicture(id)).then(() =>
			dispatch(thunkGetAllPictures())
		);
	}

	if (!galleryArr.length) return null;

	// console.log("AAAAA-Gallery", gallery);
	return (
		loaded && (
			<div>
				<h1>Pictures</h1>
				<div className='left-url-form'>
					<h2>Add New Picture</h2>
					{galleryArr.length < 10 && (
						<form onSubmit={createPicture}>
							<label>
								Image Url:
								<input
									value={newUrl}
									type='url'
									onChange={(e) => setNewUrl(e.target.value)}
								></input>
							</label>
							<button>SUBMIT</button>
						</form>
					)}
					<div>
						{galleryArr.length > 9 && (
							<h2>You've reached Maximum of pictures</h2>
						)}
					</div>
				</div>

				<div id='gallery-container'>
					<div>
						{!galleryArr.length && (
							<div>Add some photos so people can get to know you!</div>
						)}
					</div>
					<ul id='gallery-list'>
						{loaded &&
							galleryArr.map((pic) => (
								<div key={pic.id}>
									<img className='picture' src={pic.picture_url} />
									<div className='button-container'>
										{galleryArr.length >= 1 && (
											<button onClick={() => deletePicture(pic.id)}>
												DELETE PICTURE
											</button>
										)}
									</div>
								</div>
							))}
					</ul>
				</div>
			</div>
		)
	);
}
