const ALL_UNMARKED_USERS = "unmarked/all";

const discoverUserAction = (discoverUsers) => ({
	type: ALL_UNMARKED_USERS,
	payload: discoverUsers,
});

export const thunk_discoverUsers = () => async (dispatch) => {
	const response = await fetch("/api/discover/");
	console.log("INSIDE THUNK");
	// console.log(response, "RESPONSE");
	if (response.ok) {
		const discoverUsers = await response.json();
		console.log(discoverUsers, "HELLO");
		dispatch(discoverUserAction(discoverUsers));
		return discoverUsers;
	}
	console.log("ERROOOOORRRR");
};

const initialState = {
	discover_users: {},
};

const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ALL_UNMARKED_USERS:
			const newState = { ...state };
			newState.discover_users = normalize(action.payload.unmarked_users);
			return newState;

		default:
			return state;
	}
}
