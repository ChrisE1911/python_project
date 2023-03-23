//store
const GET_MATCHES = "/get/matches";
const actionGetMatches = (allMatches) => ({
	type: GET_MATCHES,
	payload: allMatches,
});

export const thunkGetMatches = () => async (dispatch) => {
	const response = await fetch(`/api/matches/user_matches`);
	if (response.ok) {
		const allMatches = await response.json();
		dispatch(actionGetMatches(allMatches));
	}
};
const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};
const initialState = {
	matches: [],
};
export default function matchesReducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case GET_MATCHES:
			newState = { ...state };
			newState.matches = normalize(action.payload);
			return newState;
		default:
			return state;
	}
}
