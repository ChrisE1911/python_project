const CREATE_LIKE = "/create_likes";
const GET_LIKES = "/get_likes";
const DELETE_LIKE = "/delete_likes"

const createLikeAction = (data) => ({
	type: CREATE_LIKE,
	payload: data,
});

const getLikesAction = (data) => ({
	type: GET_LIKES,
	payload: data
})

const deleteLikesAction = (data) => ({
	type: DELETE_LIKE,
	payload: data
})

// const createDislikeAction = (data) => ({
// 	type: CREATE_DISLIKE,
// 	payload: data,
// });

export const thunkCreateLike =
	(like_receiver_id, admirer_id) => async (dispatch) => {
		const response = await fetch(`/api/discover/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				admirer_id,
				like_receiver_id,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			dispatch(createLikeAction(data));
			return data;
		// } else if (response.status < 500) {
		// 	const data = await response.json();
			//   if (data.errors) {
			//     return data.errors;
			//   }
			// } else {
			//   return ['An error occurred. Please try again.']
			// return data;
		}
	};

export const thunkCreateDislike =
	(hate_receiver_id, hater_id) => async (dispatch) => {
		const response = await fetch('api/dislikes/', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				hater_id,
				hate_receiver_id,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			// dispatch(createDislikeAction(data));
			return data;
		}

	};

export const thunkGetAllLikes =
	() => async (dispatch) => {
		const response = await fetch('/api/likes/my-likes')
		console.log("GETLIKESRESPONSE", response)
		if (response.ok) {
			const data = await response.json();
			dispatch(getLikesAction(data));

			return data;
		}
	}

export const thunkDeleteLike =
	(user_id) => async (dispatch) => {
		const response = await fetch(`/api/likes/delete-like/${user_id}`, {
			method: 'DELETE'
		})

		if (response.ok) {
			const removedLike = await response.json();
			dispatch(deleteLikesAction(removedLike));
		}
	}

const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};

const initialState = {
	likes: [],
};
export default function reducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case GET_LIKES:
			newState = { ...state};
			newState.likes = normalize(action.payload);
			return newState;
		case CREATE_LIKE:
			newState = { ...state };
			let updatedLikes = [...state.likes];
			updatedLikes.push(action.like);
			newState.likes = updatedLikes;
			return newState;
		case DELETE_LIKE:
			newState = { ...state }
			console.log('ACTION', action.payload)
			delete newState.likes[action.payload]
			return newState
		default:
			return state;
	}
}

// case CREATE_GROUP:
//             newState = { ...state };
//             const updatedGroups = {...state.allGroups, [action.group.id]: action.group}
//             newState.allGroups = updatedGroups;
//             return newState;
