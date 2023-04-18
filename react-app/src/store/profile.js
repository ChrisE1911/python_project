const CREATE_PROFILE = "/create_profile";
const CURRENT_USER_PROFILE = "/current_user_profile";
const EDIT_PROFILE = "/edit_profile";
const DELETE_USER = "/delete_curr_user";
const createProfileAction = (data) => ({
	type: CREATE_PROFILE,
	payload: data,
});
const editProfileAction = (data) => ({
	type: EDIT_PROFILE,
	payload: data,
});

const currentUserProfileAction = (data) => ({
	type: CURRENT_USER_PROFILE,
	payload: data,
});

const deleteProfileAction = (data) => ({
	type: DELETE_USER,
	payload: data,
});

export const thunkEditProfile = (data) => async (dispatch) => {
	const response = await fetch("/api/profile/edit", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	console.log("INSIDE HERE?????", response.body);
	if (response.ok) {
		let editedProfileData = await response.json();
		// console.log("INSIDE EDIT PROFILE REDUCER");
		console.log("EDITEDPROFILE IN THUNK", editedProfileData);
		dispatch(editProfileAction(editedProfileData));
		return editedProfileData;
	}
};

export const thunkCreateProfile = (data) => async (dispatch) => {
	const response = await fetch("/api/profile/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (response.ok) {
		const profileData = await response.json();
		const addPicture = await fetch("/api/picture/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (addPicture.ok) {
			const newPicture = await addPicture.json();
			const newObj = { ...profileData, ...newPicture };
			dispatch(createProfileAction(newObj));
			return newObj;
		}
	}
};

export const thunkInitialCreateProfile = (data) => async (dispatch) => {
	const response = await fetch("/api/profile/edit", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (response.ok) {
		const profileData = await response.json();
		const addPicture = await fetch("/api/picture/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (addPicture.ok) {
			const newPicture = await addPicture.json();
			const newObj = { ...profileData, ...newPicture };
			dispatch(createProfileAction(newObj));
			return newObj;
		}
	}
};


export const thunkCurrentUserProfile = () => async (dispatch) => {
	const response = await fetch("/api/profile/current_user");

	// console.log("RESPONSE", response);
	console.log("THUNK CURRENT USER", response);
	if (response.ok) {
		const data = await response.json();
		dispatch(currentUserProfileAction(data));
		return data;
	} else {
		return null;
	}
};

export const thunkDeleteUserProfile = () => async (dispatch) => {
	const response = await fetch("/api/profile/delete", {
		method: "DELETE",
	});
	console.log("DELETE RESPONSE", response);
	if (response.ok) {
		const removedUser = await response.json();
		dispatch(deleteProfileAction(removedUser));
		return removedUser;
	}
};

const initialState = {
	working_profile: {},
	current_user_profile: {},
};

export default function profileReducer(state = initialState, action) {
	let newState = { ...state };
	switch (action.type) {
		case CREATE_PROFILE:
			let profileInfo = action.payload;
			newState.working_profile = { ...profileInfo };
			return newState;
		// case EDIT_PROFILE:
		case EDIT_PROFILE:
			const copyNewState = { ...state };
			console.log("REDUCER NEW STATE", copyNewState);
			const editedProfile = action.payload;
			console.log("REDUCER EDITEDPROFILE", editedProfile);
			copyNewState.current_user_profile.profile = { ...editedProfile };
			return copyNewState;
		case CURRENT_USER_PROFILE:
			let currentProfile = action.payload;
			newState.current_user_profile = { ...currentProfile };
			return newState;
		case DELETE_USER:
			newState.current_user_profile = {};
			return newState;
		default: {
			return state;
		}
		case DELETE_USER:
	}
}
