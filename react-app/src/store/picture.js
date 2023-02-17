const GET_ALL_PICTURES = "/get_all_pictures";
const CREATE_MORE_PICTURES = "/create_more_pictures";
const DELETE_PICTURE = "/delete_picture";

const getAllPicturesAction = (data) => ({
	type: GET_ALL_PICTURES,
	payload: data,
});

const createMorePicturesAction = (data) => ({
	type: CREATE_MORE_PICTURES,
	payload: data,
});
const deletePicAction = (data) => ({
	type: DELETE_PICTURE,
	payload: data,
});

export const thunkGetAllPictures = () => async (dispatch) => {
	const response = await fetch("/api/picture/all");

	if (response.ok) {
		const data = await response.json();
		dispatch(getAllPicturesAction(data));

		return data;
	}
};

export const thunkCreateMorePictures = (picture_url) => async (dispatch) => {
	const response = await fetch("/api/picture/create-additional", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ picture_url }),
	});

	if (response.ok) {
		const picture = await response.json();
		dispatch(createMorePicturesAction(picture));
		return picture;
	}
};

export const thunkDeletePicture = (id) => async (dispatch) => {
	const response = await fetch(`/api/picture/delete/${id}`, {
		method: "DELETE",
	});
	if (response.ok) {
		const removedPic = await response.json();
		await dispatch(deletePicAction(removedPic));
	}
};

const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};

const initialState = {
	allPictures: {},
	currentPicture: {},
};

export default function pictureReducer(state = initialState, action) {
	let newState = { ...state };
	switch (action.type) {
		case GET_ALL_PICTURES:
			newState = { ...state };
			newState.allPictures = normalize(action.payload);
			return newState;
		case CREATE_MORE_PICTURES:
			newState.allPictures[action.payload.id] = { ...action.payload };
			newState.currentPicture = { ...action.payload };
			return newState;
		case DELETE_PICTURE:
			delete newState.allPictures[action.payload.id];
			return newState;
		default:
			return state;
	}
}
